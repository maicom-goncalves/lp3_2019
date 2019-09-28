const Trabalho=[
    {
        "titulo" : "A Terra Plana",
        "orientador" :"Julio Verne",
        "estudante1"  :"Ariosvaldo",
        "area":"CET"
    }
   
];


const { Trabalho } = require('./db');


const salvarTrabalhos = async () => {
   
    await require('./db');
    for (let i=0;i<trabalhos.length;i++){
        await Item.create(trabalhos [i]);
    }
 };

 salvarTrabalhos();

