const fs = require('fs');

const newLine = '\nNova Linha2'; 

fs.appendFile('arquivo.txt', newLine, err =>{  
    if (err) throw err;
    console.log('infomação Adicionada!!');
});