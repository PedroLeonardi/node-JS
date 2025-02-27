const fs = require("fs");
const { parse } = require("path");

fs.readFile ('dados.json', 'utf8', (err, data) =>{
    if (err) {
        console.log('Erro ao ler arquivo: ', err);
        return; //ultiliza para parar e abortar a execução do trecho de codigo
    }; 
    try { // tentativa de executar seu cogdigo e se não consguir ele caputra o erro
        const dados = JSON.parse(data);
        console.log ("Dados dos arquivos lidos: \n", dados);
    }catch (error) {
        console.log("Erro ao analisar o JSON: ", error);
    }
});