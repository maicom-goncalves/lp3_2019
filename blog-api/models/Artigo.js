const {
    Schema,
    model,
    //ObjectId
} = require('mongoose');

const esquema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    texto: 
        {
            //type: ObjectId,
            type:String,
            required: true
        }
});

const Artigo = model('Artigo', esquema);
module.exports = Artigo;