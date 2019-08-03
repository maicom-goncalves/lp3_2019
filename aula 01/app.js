const express = require('express');

const app = express();

app.use('/data',
(rq,res)=>{
    let dataAtual=new Date();
    dataAtual=dataAtual.toLocaleDateString();
    res.json(dataAtual)});

app.use('/inverter/:str',
(req,res)=>{
    //recupera a variavel de parametro
    let str=req.params.str;
    str=str.split('').reverse().join('');
    res.json(str);
}
);

app.use('/cpf/:cpf',(req,res)=>
{   let cpf=req.params.cpf;
    //tarefa proxima aula  
    res.send('Validador de cpf')

}
);
app.listen(3000,
    ()=>console.log('Servidor iniciado')
    );