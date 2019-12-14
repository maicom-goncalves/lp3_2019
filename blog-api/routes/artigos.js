const express = require('express');
const artigoCtrl = require('../controllers/ArtigoController');

const router = express.Router();

router.get('/', artigoCtrl.recuperarArtigos);

router.post('/', artigoCtrl.salvar);

router.put('/_id', artigoCtrl.atualizar);

router.delete('/_id', artigoCtrl.deletar);

module.exports = router;