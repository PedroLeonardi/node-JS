const path = require('path');

const caminhoCompleto = path.join(__dirname, 'arquivo.txt'); //exibe o CAMINHO DO ARQUIVO
console.log(caminhoCompleto);

const nomeArquivo = path.basename (caminhoCompleto); //exibe o NOME DO ARQUIVO
console.log(nomeArquivo);

const extensao = path.extname(caminhoCompleto); // exibe a EXTENSAO do Arquivo
console.log (extensao)

