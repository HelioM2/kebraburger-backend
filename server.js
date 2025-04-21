require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const produtoRoutes = require('./routes/produtoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexão à base de dados com variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10, // Número de conexões simultâneas
    connectTimeout: 10000 
  })
  
  // Testar se conecta
connection.connect((err) => {
    if (err) {
      console.error('Erro na conexão:', err);
    } else {
      console.log('Conectado ao MySQL com sucesso!');
    }
  });

  // Enviar um "ping" a cada 5 minutos (300000 ms)
setInterval(() => {
    connection.ping(err => {
      if (err) {
        console.error('Erro ao enviar ping:', err);
      } else {
        console.log('Ping enviado com sucesso');
      }
    });
  }, 300000); // 5 minutos
  
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

