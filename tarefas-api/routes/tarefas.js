const express = require('express');
const tarefaCtrl = require('../controllers/TarefasController');

const router = express.Router();

router.get('/', tarefaCtrl.recuperarTarefas);

router.post('/', tarefaCtrl.salvar);

router.put('/:id', tarefaCtrl.atualizar);

router.delete('/:id', tarefaCtrl.remover);

router.get('/:id', tarefaCtrl.recuperarTarefaId);

module.exports = router;
