const fs = require('fs');

const nomeAntigo = "texte";
const nomeNovo = "texto";

fs.rename(nomeAntigo, nomeNovo, err => {
  if (err) {
    return console.error(err);
  };
  console.log ('vc renomeou o arquivo: ',nomeAntigo, 'para: ',nomeNovo );
});