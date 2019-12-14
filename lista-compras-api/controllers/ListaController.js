const Lista = require('../models/Lista');
const Item = require('../models/Item');

const controller = {

    recuperarListas: async (req, res) => {
        const listas = await Lista.find();
        return res.json(listas);
    },

    recuperarItens: async (req, res) => {
        const { filtro } = req.body;
        const itens = await Item.find({
            descricao: { '$regex': filtro, '$options': 'i' }
        });
        return res.json(itens);
    },

    salvar: (req, res) => {
        const { nome } = req.body;
        if (nome) {
            const lista = req.body;
            Lista
                .create(lista)
                .then(listaSalva => res.status(201).json(listaSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar a lista'
                    });
                });
        } else {
            return res.status(400).json({
                mensagem: 'Nome não informado'
            });
        }
    },

	salvarItens: (req, res) => {
	const { id } = req.params;
        const lista = req.body;
        let itens  = new Object();

        console.log(lista);
        for (var i in itens) {
            if (itens(i)) {
                itens += itens[i] +descricao + quantidade + unidade;
            }
  }
  return itens;

        itens = req.body;
        if (itens>1) {
            
            Lista
                .findByIdAndUpdate(id,itens)
                .exec()
       .then( 
         () => res.status(204).end(),
         erro => {
            console.log(erro)
         }
         )
       .catch(erro => {
          console.log(erro);
          res.status(500).json({mensagem: 'Erro ao tentar remover a lista'})
       });
        } else {
            return res.status(400).json({
                mensagem: 'sem item a informar'
            });
        }
    },	

atualizar: (req, res) =>{
         const { id } = req.params;
         //let {lista}= req.params;
          const lista= req.body;
         //lista=lista;
         console.log(lista);
         Lista
         .findByIdAndUpdate(id, lista) /// recupera p id e atualiza
         .exec()
         .then(listaAtualizada => {

            //se encontrou a lista e a atualizou .....
            if(listaAtualizada ){
               res.json({mensagem: "Lista Atualizada"})
            }else{
               res.status(404).json({ mensagem: "Lista não encontrada"})
            }
         }) // 1 casos: eu encontrei e atualizei 2 caso: eu consegui acessa mas nao encontrei o ID
         .catch(erro =>{
            console.log(erro);
            res.status(500).json({mensagem: 'Erro ao tentar atualizar a lista'})
         }); 
    },

    remover: (req, res) => {
       const { id } = req.params;
       const lista = req.body;
       console.log(id);
       Lista
       .findByIdAndRemove( id ,lista)
       .exec()
       .then( 
         () => res.status(204).end(),
         erro => {
            console.log(erro)
         }
         )
       .catch(erro => {
          console.log(erro);
          res.status(500).json({mensagem: 'Erro ao tentar remover a lista'})
       });

    }

};

module.exports = controller;
