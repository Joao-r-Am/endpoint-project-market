const { Router } = require('express');
const ProdutosController = require('../controller/ProdutoController');

const router = Router();

router.get('/produtos', ProdutosController.pegaTodosProdutos);
router.get('/produtos/:id', ProdutosController.pegaUmProduto);
router.post('/produtos', ProdutosController.criaProduto);
router.put('/produtos/:id', ProdutosController.atualizaProduto);
router.delete('/produtos/:id', ProdutosController.deletaProduto);

module.exports = router;