const buscarDados = require('./funcaoAssincrona');

describe('Teste função Assincrona', () => {

    it("Exibir o toDos 1", () => {
        return buscarDados()
        .then(data => {
            expect(data).toBeDefined();
            expect(data.userId).toBe(1);
        })
    })
})