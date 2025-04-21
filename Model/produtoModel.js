const db = require('../config/db'); // ou como estiver o caminho do teu arquivo de conexão

const Produto = {};

// Buscar todos os produtos
Produto.getAll = (callback) => {
  db.query('SELECT * FROM produtos', callback);
};

// Criar novo produto
Produto.create = (novoProduto, callback) => {
  const { nome, descricao, preco, quantidade, imagem, tipo_artigo } = novoProduto;
  const query = 'INSERT INTO produtos (nome, descricao, preco, quantidade, imagem, tipo_artigo) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [nome, descricao, preco, quantidade, imagem, tipo_artigo], callback);
};

module.exports = Produto;
