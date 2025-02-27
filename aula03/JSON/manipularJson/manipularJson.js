const fs = require("fs");

fs.readFile ('dadosManipulados.json', 'utf8', (err, data) =>{
    if (err) {
        console.log('Erro ao ler arquivo: ', err);
        return; //ultiliza para parar e abortar a execução do trecho de codigo
    }; 
    try { // tentativa de executar seu cogdigo e se não consguir ele caputra o erro
        const dados = JSON.parse(data); // conerte o arquivo par aum arquivo JSON
        console.log (dados.nome); //forma 1
        console.log(dados['nome']); // forma 2
        console.log(dados.endereço.rua); //chama os dados objetos multidimensionais
        console.log(dados.telefones[1], '\n');//chama os dados arrays multidimensionais

        dados.telefones.forEach( telefone =>{
            console.log(`Telefone: ${telefone}`);
        })

    }catch (error) {
        console.log("Erro ao analisar o JSON: ", error);
    }
});