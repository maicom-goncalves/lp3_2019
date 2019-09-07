//const Lista = require('../models/Lista');
//let listas = [];

/**
 * este import é uma associação por desestruturação
 */
const { Lista } = require('../databases/db');

const controller = {
    // Arrow function
    recuperarTodas: async  (req, res) => {
        const listas= await Lista.findAll();
        return res.jason(listas);
    },
    salvar: (req, res) => {
        const lista=req.body;
            if(!lista.nome)
            return res.status(400).json({mensagem: 'nome não informado'});
          

        Lista.create(lista).then(
            listaSalva => res.status(201).jason(listaSalva)
        )
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ mensagem: 'Erro ao tentar salvar a lista'});
        });
    }
};

module.exports = controller;