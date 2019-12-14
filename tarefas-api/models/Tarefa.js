const {
    Schema,
    model,
} = require('mongoose');

const esquema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    severidade: {
        type: String,
        required: true,
        enum: ['baixa', 'média', 'alta', 'urgente']
    },
    realizada: {
        type: Boolean,
        default: false
    }
   
});

const Tarefa = model('Tarefa', esquema);
module.exports = Tarefa;
