const fs = require('fs');

const pastaAtual = 'texte' 

fs.mkdir(pastaAtual, err =>{
    if (err) throw err;
    console.log ('Diretorio Criado');
})