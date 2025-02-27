const fs = require('fs');

const conteudo = 'Este é o conteudo do meu arquivo';

fs.writeFile('arquivo.txt', conteudo, err => {

        if(err) throw err; // THROW exibe a informaçao e mata o arquvioe cancela a sua rodação
        console.log('Arquivo salvo!')
})

