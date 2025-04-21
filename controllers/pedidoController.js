const Pedido = require('../Model/pedidoModel');

const listarPedido = (req, res) => {
  Pedido.getAll((err, results) => {
    if (err) {
      console.error('Erro ao listar pedidos:', err);
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum pedido encontrado' });
    }
    res.json(results);
  });
};

// Atualizar o status do pedido
const atualizarStatusPedido = (req, res) => {
  const id = req.params.id;  // Pega o ID do pedido da URL

  Pedido.atualizarStatus(id, (err, result) => {
    if (err) {
      console.error('Erro ao atualizar status do pedido:', err.message);
      return res.status(500).json({ error: 'Erro ao atualizar o status do pedido.' });
    }
    res.json({ message: 'Status do pedido atualizado com sucesso.' });
  });
};

const listartotalpedidos = (req, res) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const itensPorPagina = 10;

  Pedido.getAllPaginated(pagina, itensPorPagina, (err, pedidos) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar pedidos paginados' });
    }

    Pedido.getTotalCount((err, total_pedidos) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao contar pedidos' });
      }

      const total_paginas = Math.ceil(total_pedidos / itensPorPagina);

      // Se estiver usando HTML com template engine
      // res.render('pedidos', {
      //   pedidos,
      //   pagina,
      //   total_paginas
      // });

      // OU se for API (remover o render acima e usar este abaixo)
      res.json({
        pedidos,
        pagina,
        total_paginas
      });
    });
  });
};

const criarPedido = async (req, res) => {
  try {
    let { produtos, total, endereco, telefone } = req.body;

    if (!produtos || !total || !endereco || !telefone) {
      return res.status(400).json({ error: 'Faltam dados obrigatórios!' });
    }

    // Converte produtos para string se for objeto ou array
    if (typeof produtos === 'object') {
      produtos = JSON.stringify(produtos);
    }

    // Garante que total é número
    total = parseFloat(total);

    const pedido = { produtos, total, endereco, telefone };

    // Chama o Model
    Pedido.create(pedido, (err, result) => {
      if (err) {
        console.error('Erro ao inserir pedido no banco de dados:', err);
        return res.status(500).json({ error: 'Erro ao processar o pedido.' });
      }

      res.status(201).json({ message: 'Pedido realizado com sucesso!', pedidoId: result.insertId });
    });

  } catch (error) {
    console.error('Erro geral no controller:', error);
    res.status(500).json({ error: 'Erro ao processar o pedido.' });
  }
};

const getTotaisPorPeriodo = (req, res) => {
  const tipo = req.query.tipo;

  Pedido.getTotaisPorPeriodo(tipo, (err, results) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(results);
  });
};

  

module.exports = { listarPedido, criarPedido, getTotaisPorPeriodo, listartotalpedidos, atualizarStatusPedido };
