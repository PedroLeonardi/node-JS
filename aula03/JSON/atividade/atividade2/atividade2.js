const fs = require("fs");



fs.readFile('data2.json', 'utf8', (err, data) =>{
    if(err) {
        console.log("houve erro na leitura: " , err);
        return;
    }

    
    const dataJS = JSON.parse(data);

    dataJS.produtos.forEach(produto => {
        console.log(
            "\nNome do produto: ",produto.nome,
            "\nPreço: R$ ",produto.preco,
            "\nDescrição: ",produto.descricao,
            "\nCategoria: ",produto.categoria,"\n",
            "\n---------------------------------------"
        );
    });

    

    
})