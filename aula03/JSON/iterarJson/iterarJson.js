const fs = require("fs")

    const dados = {
        produtos: [
            {nome: 'produto A', preço: 10},
            {nome: 'produto B', preço: 20},
            {nome: 'produto C', preço: 50}
        ]
    };

    dados.produtos.forEach(produto =>{
        console.log(`nome: ${produto.nome} e o preço é: ${produto.preço}`);
    });