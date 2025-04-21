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

const mysql = require('mysql2');

// Crie a conexão usando variáveis de ambiente
const connection = mysql.createConnection({

  DB_HOST: 'mysql.railway.internal',
  DB_USER: 'root',
  DB_PASSWORD: 'OqjnltmqGXZoBqaGiFcjKHYuinnCdJah',
  database: 'kebra_burger',

  host: process.env.DB_HOST, // Substitua pelo nome da variável de ambiente para o host
  user: process.env.DB_USER, // Substitua pelo nome da variável de ambiente para o usuário
  password: process.env.DB_PASSWORD, // Substitua pelo nome da variável de ambiente para a senha
  database: process.env.DB_NAME // Substitua pelo nome da variável de ambiente para o banco de dados
});

// Conectar ao banco de dados
connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;

