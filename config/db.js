// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'kebra_burger'
// });

// connection.connect(err => {
//   if (err) throw err;
//   console.log('Conectado ao MySQL!');
// });

// module.exports = connection;
require('dotenv').config();
const mysql = require('mysql2');

// Usando variáveis de ambiente para se conectar ao banco de dados
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // 'mysql.railway.internal'
  user: process.env.DB_USER, // 'root'
  password: process.env.DB_PASSWORD, // Sua senha
  database: process.env.DB_NAME, // 'kebra_burger'
  port: process.env.DB_PORT, // Certifique-se de incluir a porta
  connectTimeout: 30000 // Aumentando o tempo de espera para  conexão
});

// Conectar ao banco de dados
connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;

