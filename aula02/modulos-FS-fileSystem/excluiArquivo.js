const fs = require('fs');

const apagarPasta = "texte.txt";

fs.unlink(apagarPasta, (err) =>{
    if (err) throw err;
    
    console.log ('Voce apagou a pasta ', apagarPasta)
})