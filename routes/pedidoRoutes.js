const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController'); // Certifique-se de que o caminho está correto

// Rota para listar pedidos
router.get('/', pedidoController.listarPedido);
router.put('/pedidos/:id/status', pedidoController.atualizarStatusPedido);

// Rota para criar pedido
router.post('/', pedidoController.criarPedido);

module.exports = router;
