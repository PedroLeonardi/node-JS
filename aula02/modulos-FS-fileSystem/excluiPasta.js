const fs = require('fs');

const nomePasta = "texto"

fs.rmdir(nomePasta, err=>{
    if (err) throw err;
    console.log (`voce apagou a pasta ${nomePasta}`)
})