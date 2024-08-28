const express = require('express');

const portifolioController = require ('../controllers/portifolioController')

const router = express.Router()

router.get('/', portifolioController.getPortifolio);

router.get('/:id', portifolioController.getProjetoById);

router.post('/', portifolioController.createProjeto);

router.put('/:id', portifolioController.updateProjeto);

router.delete('/:id', portifolioController.deleteProjeto);

module.exports = router;