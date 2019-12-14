const Artigo = require('../models/Artigo');

const controller = {

    recuperarArtigos: async (req, res) => {
        const artigos = await Artigo.find();
        return res.json(artigos);
    },
    salvar: (req, res) => {
        const { titulo } = req.body;
        const { texto } = req.body;
        if (titulo, texto) {
            const artigo = req.body;
            Artigo
                .create(artigo)
                .then(artigoSalva => res.status(201).json(artigoSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar a artigo'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'titulo não informado'
            });
        }
    },

    atualizar: (req, res) => {
        const { _id } = req.params;
        const artigo = req.body;

        Artigo
            .findByIdAndUpdate(_id, artigo)
            .exec()
            .then(artigoAtualizado => {

                if (artigoAtualizado) {
                    res.json(artigoAtualizado);
                } else {
                    res
                        .status(404)
                        .json({
                            mensagem: 'artigo não encontrado'
                        });
                }
            })
            .catch(erro => {
                console.log(erro);
                res
                    .status(500)
                    .json({
                        mensagem: 'Erro ao tentar atualizar a artigo'
                    });
            });
    },
    deletar: (req, res) => {
        const { _id } = req.params;
        const artigo = req.body;

        Artigo
            .findByIdAndRemove(_id, artigo)
            .exec()
            .then(artigoApagado => {

                if (artigoApagado) {
                    res.json(artigoApagado);
                } else {
                    res
                        .status(404)
                        .json({
                            mensagem: 'artigo não apagado'
                        });
                }
            })
            .catch(erro => {
                console.log(erro);
                res
                    .status(500)
                    .json({
                        mensagem: 'Erro ao tentar apagar o artigo'
                    });
            });
    }
};

//};

module.exports = controller;