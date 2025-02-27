const fs = require('fs').promises; // posso insierir ".PROMISES"ao lado do fs (fs.promises.readfile)

fs.readFile('arquivo.txt', 'utf8')
.then (data =>{ // para casos de suscesso  
    console.log('Conteudo do arquivo: ', data);
    return  data.toUpperCase();// metodo de transfirir informação de um then para outro 
})
.then (dataMaiscula =>{ 
    console.log('Conteudo do arquivo em maiusculo: ', dataMaiscula);
    return dataMaiscula.toLowerCase();
})
.then (dataMiniscula =>{ 
    console.log('Conteudo do arquivo em maiusculo: ', dataMiniscula);
})

.catch(err => { // para erros 
    console.log('Erro ao ler arquivo: ', err)
})
