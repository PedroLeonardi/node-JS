const os = require('os');
const fs = require('fs');

const arquitetura = (`Arquitetura: ${os.arch()}`);
const hostname = (`\nHostName: ${os.hostname()}`);
arquitetyra sustena ioetaruuican okatafonam aversao 
diretorio 
rede

const all = (arquitetura+hostname)

fs.writeFile ('info_sistema.txt', (all) , err =>{
    if (err) throw err;
    console.log ('arquivo feito');

});

