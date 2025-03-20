// import somar from "/matematica"; TÁ DANDO PROBLEM AUSAR O IMPORT
const somar = require('./matematica')

// teste Suite
describe('Função Somar', ()=>{ 

    //teste1
    it('Deve somar 2 números corretamente', ()=>{ //o que deve ser feito 
        expect(somar(2,3)).toBe(5) // expect("A CÇÃO QUE DEVE OCORRET").toBe("O QUE É PARA ACONTECER")
    });

    //teste2
    it('deve somar números positivos e negativos corretamente', ()=>{
        expect(somar(-2,3)).toBe(1);
    });

    //teste3
    it('deve somar dois numeros negativos', ()=>{
        expect(somar(-1,-3)).toBe(-4)
    })

    // it('Não pode somar um numero qualquer e uma letra', ()=>{
    //     expect(somar(2+a)).toBe("error")
    // })
});

console.log(somar (2,5));