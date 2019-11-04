const express = require('express');
const contatoCtrl = require('../controllers/contatoController');

const router = express.Router();

router.post('/', contatoCtrl.salvar);

router.get('/contatos', contatoCtrl.recuperarContatos);

module.exports = router;