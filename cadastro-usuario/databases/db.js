const mongoose = require('mongoose');

const dbURI ='mongodb://localhost/cadastro-usuario';

mongoose.connect(dbURI,{useNewUrlParser : true })
.then(()=>console.log('Mongoose conectado'))
.catch(erro=> console.log(erro));