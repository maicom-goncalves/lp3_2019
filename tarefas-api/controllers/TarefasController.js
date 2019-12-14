const Tarefa = require('../models/Tarefa');

const controller = {

    recuperarTarefas: async (req, res) => {
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },
    recuperarTarefaId: async (req, res) => {
        const { id } = req.params;
        const tarefas = await Tarefa.findById(id)
            .exec()
            .then().catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao procurar a tarefa' })
            });
        return res.json(tarefas);

    },
    listarSeveridades(req, res) {
        const severidades = Tarefa.schema.path('severidade').enumValues;
        res.json(severidades);
    },
    salvar: (req, res) => {
        const { nome } = req.body;
        if (nome) {
            const tarefa = req.body;
            Tarefa
                .create(tarefa)
                .then(tarefaSalva => res.status(201).json(tarefaSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar tarefa'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'Nome não informado'
            });
        }
    },


    atualizar: (req, res) => {
        const { id } = req.params;

        const tarefa = req.body;

        console.log(tarefa);
        Tarefa
            .findByIdAndUpdate(id, tarefa)
            .exec()
            .then(tarefaEncontrada => {


                if (tarefaEncontrada) {
                    res.json({ mensagem: "Tarefa Encontrada" })
                } else {
                    res.status(404).json({ mensagem: "Tarefa não encontrada" })
                }
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar atualizar a tarefa' })
            });
    },

    remover: (req, res) => {
        const { id } = req.params;
        const tarefa = req.body;
        console.log(id);
        Tarefa
            .findByIdAndRemove(id, tarefa)
            .exec()
            .then(
                () => res.status(204).end(),
                erro => {
                    console.log(erro)
                }
            )
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar remover a tarefa' })
            });

    }

};

module.exports = controller;
