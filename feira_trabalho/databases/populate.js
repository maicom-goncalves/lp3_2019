const Trabalho=[
    {
        "titulo" : "A Terra Plana",
        "orientador" :"Julio Verne",
        "estudante1"  :"Ariosvaldo",
        "area":"CET",
        
    },
    {
        "titulo" : "a descoberta da america",
        "orientador" :"Americo Vespucio",
        "estudante1"  :"Arizontina",
        "estudante2"  :"Gumercindo",
        "estudante3"  :"Guilermina",
        "area":"CET",
        
        
    },
    {
        "titulo" : "teoria das cordas",
        "orientador" :"Feyman",
        "estudante1"  :"Marcelo Gleiser",
        "estudante2"  :"",
        "estudante3"  :"",
        "area":"CET",
        
        
    }

   
];


const { Trabalho } = require('./db');


const salvarTrabalhos = async () => {
   
    await require('./db');
    trabalhos.forEach(async (trabalho) =>
        await Trabalho.create(trabalho));
 };

 salvarTrabalhos();

