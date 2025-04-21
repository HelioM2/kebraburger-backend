const db = require('../config/db');

const Pedido = {};


// Atualizar o status do pedido
Pedido.atualizarStatus = (id, callback) => {
  const query = 'UPDATE pedidos SET status = 1 WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows > 0) {
      callback(null, { message: 'Status atualizado com sucesso.' });
    } else {
      callback(new Error('Pedido não encontrado.'));
    }
  });
};

// Retorna todos os pedidos paginados
Pedido.getAllPaginated = (pagina, itensPorPagina, callback) => {
  const inicio = (pagina - 1) * itensPorPagina; // Calcular o offset para a consulta
  const query = 'SELECT * FROM pedidos LIMIT ? OFFSET ?';
  
  db.query(query, [itensPorPagina, inicio], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

Pedido.getTotalCount = (callback) => {
  const query = 'SELECT COUNT(*) AS total FROM pedidos';
  db.query(query, (err, result) => {
    if (err) return callback(err);
    callback(null, result[0].total);
  });
};

Pedido.getAll = (callback) => {
  db.query('SELECT * FROM pedidos', (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Criar novo pedido
Pedido.create = (novoPedido) => {
  return new Promise((resolve, reject) => {
      const { produtos, total, endereco, telefone } = novoPedido;
      const query = 'INSERT INTO pedidos (produtos, total, endereco, telefone) VALUES (?, ?, ?, ?)';
      db.query(query, [produtos, total, endereco, telefone], (err, result) => {
          if (err) return reject(err);
          resolve(result);
      });
  });
};

// Totais por período (dia, mês, ano)
Pedido.getTotaisPorPeriodo = (tipo, callback) => {
  let query = '';

  if (tipo === 'dia') {
    query = "SELECT DATE(data_criacao) AS periodo, SUM(total) AS total FROM pedidos GROUP BY DATE(data_criacao)";
  } else if (tipo === 'mes') {
    query = "SELECT DATE_FORMAT(data_criacao, '%Y-%m') AS periodo, SUM(total) AS total FROM pedidos GROUP BY DATE_FORMAT(data_criacao, '%Y-%m')";
  } else if (tipo === 'ano') {
    query = "SELECT YEAR(data_criacao) AS periodo, SUM(total) AS total FROM pedidos GROUP BY YEAR(data_criacao)";
  } else {
    return callback(new Error('Tipo inválido. Use dia, mes ou ano.'));
  }

  db.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = Pedido;
