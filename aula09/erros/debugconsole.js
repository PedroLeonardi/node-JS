function somar (a,b){
    console.log('o valor de a é: ', a);
    console.log('o valor de b é:', b);
    let resultado = a + b;
    console.log('o resultado é: ', resultado)
    return resultado;
};

somar(1,1);

// MÓ BIXO BURRO SE SOMAR "somar(1,'t');" A RESPOSTA É '1T'

// USAR CONSOLE.LOG PARA ANALISAR TODOS OS PASSOS E SE AS INFORMÇÃOS ESTÃO ANDANDO

// node --inspect-brk [NOME DO ARQUIVO]
// logo apos isso acessar no CHROME o 'chrome://inspect' e clicar em inspect