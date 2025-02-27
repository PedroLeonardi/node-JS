const fs = require("fs")

const dados = { 
    nome: 'pedro',
    idade: 19,
    cidade: "Sao Bernardo Campo",
        telefones: [
            "11-0000-0000",
            "11-1111-1111"
    ], 
    "ativo": true,
    "nulo": null,  
    endereço: {
        rua: "Rua Principal, 123",
        cidade: "São Paulo" 
    }

};

const jsonData = JSON.stringify(dados,null,2) // transforma os "dados" em uma strig para ser salvo corretamente
//(Dados, null, 2) DADOS = conteudo, NULL = naõ quero atubuir substituiçoes, 2 = mantem a formatação da constante

fs.writeFile ('cridado.json', jsonData, 'utf8', (err)=>{
    if (err) {
        console.log ("Ouve um erro na execução: ", err);
        return;
    };
    console.log ("Dados gravados com sucesso")

})