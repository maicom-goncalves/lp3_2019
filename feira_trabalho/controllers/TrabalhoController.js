const { Op } = require('sequelize');
const { Trabalho } = require('../databases/db');

const controller = {
    recuperarTodas: async (req, res) => {
        const trabalhos = await Trabalho.findAll();
        return res.json(trabalhos);
    },

    salvar: (req, res) => {
        const trabalho = req.body;

       if (!trabalho.titulo) {
            return res
                .status(400)
                .json({ mensagem: 'titulo não informado' });
        }
        if (trabalho.area !='CET' || 'CAE' ||'MDIS' ||'CHCSA' ||'CBS' || 'FIC') {
            return res
                .status(400)
                .json({ mensagem: 'area incorreta' });
        }
        
        Trabalho
            .create(trabalho)
            .then(
                trabalhoSalva => res.status(201).json(trabalhoSalva),
                erro => res.status(400).json(erro)
            )
            .catch(erro => {
                console.log(erro);
                return res
                    .status(500)
                    .json({ mensagem: 'Erro ao tentar salvar o trabalho' });
            });

           
    },
   

    recuperarTrabalhosPorTitulo: async (req, res) => {
        //const consulta = req.body.consulta;
        const { consulta } = req.body;
        let trabalhos = await Trabalho.findAll({
            where: {
                titulo: {
                    [Op.iLike]: `%${consulta}%`
                }
            }
        });
        return res.json(trabalhos);
    }
};

module.exports = controller;