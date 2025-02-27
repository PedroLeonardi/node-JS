const { read } = require('fs');

const readline = require('readline').createInterface({ //CREATEINTERFACE cria uma interface que posibilita a comunicação usuario sistema
    // STD Standart entrada ou saida
    input: process.stdin,
    output: process.stdout,         
});  

readline.question('Qual é o seu nome?', nome =>{
    console.log(`Olá, ${nome}!!!`);
    readline.close();
});