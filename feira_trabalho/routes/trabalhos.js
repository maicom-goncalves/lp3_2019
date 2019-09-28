const express = require('express');
const trabalhoCtrl = require('../controllers/TrabalhoController');

const router = express.Router();

router.get('/', trabalhoCtrl.recuperarTodas);

router.post('/', trabalhoCtrl.salvar);

router.get('/trabalhos',trabalhoCtrl.recuperarTrabalhosPorTitulo);

module.exports = router;