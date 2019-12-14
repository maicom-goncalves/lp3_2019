const { Schema, model } = require('mongoose');

const esquema = new Schema({
    descricao: {
        type: String,
        required: true,
        unique:true
    },
    unidade: {
        type: String,
        required: true
    }
    //confirmar ou desconfirmar compra
    /*checkbox:{
    	type:Boolean
    }*/
});

const Item = model('Item', esquema);//sempre no singular e letra maiuscula
module.exports = Item;