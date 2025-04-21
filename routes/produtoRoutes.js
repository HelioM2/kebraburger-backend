const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const multer = require('multer');
const path = require('path');

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // pasta onde a imagem será guardada
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // exemplo: 1617919431234.jpg
  }
});

const upload = multer({ storage });

// Rota GET
router.get('/', produtoController.listarProdutos);

// Rota POST com imagem
router.post('/', upload.single('imagem'), produtoController.criarProduto);

module.exports = router;
