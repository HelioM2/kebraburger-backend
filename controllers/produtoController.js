const Produto = require('../Model/produtoModel');

const listarProdutos = (req, res) => {
  Produto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const criarProduto = (req, res) => {
    const novoProduto = {
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: parseFloat(req.body.preco),
      quantidade: parseInt(req.body.quantidade),
      imagem: req.file ? req.file.path : null, // Salva o caminho do arquivo
      tipo_artigo: req.body.tipo_artigo,
    };
  
    Produto.create(novoProduto, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(201).json({ id: result.insertId, ...novoProduto });
    });
  };
  

module.exports = { listarProdutos, criarProduto };
