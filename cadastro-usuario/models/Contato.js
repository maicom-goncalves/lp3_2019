const {Schema,model} =require('mongoose');

const esquema= new Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    senha2:{
        type: String,
        required: true
    }
});

const Contato=model('Contato',esquema);
module.exports=Contato;