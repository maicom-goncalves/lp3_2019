const express = require('express');

const app=express();

app.use('/',
(req,res)=>res.send('Fala,negada!')
);

app.listen(3000,
    ()=>console.log('Servidor iniciado')
);