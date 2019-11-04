const Contato =require('../models/Contato');
const controller = {
recuperarContatos: async (req,res) => {
        const { filtro }=req.body;
        const contatos =await Contato.find(
            {
                nome:{'$regex': filtro ,'$options' : 'i'}
            }
        );
        return res.json(contatos);
    },
   
    salvar: (req, res) => {
       const { nome } = re.body;  
       if (nome){
            const contato = req.body;
            Contato
            .create(contato)
            .then(ContatoSalva => res.status(201).json(contatoSalva))
            .catch(erro=> {
                console.log(erro);
                res.status(500).json({menssagem :'Erro ao tentar salvar'})
            });
       }
       else{
           return  res.status(400).json({ 
               menssagem: 'Nome não informado'
            });
       }
        }
};
module.exports = controller;
