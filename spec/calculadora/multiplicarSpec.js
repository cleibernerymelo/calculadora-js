describe('Suite de testes de subtra;\ao', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6)
    });

    it('deve retornar 6 mesmo se o utilizador passar 2 e 3 em formato texto', () => {
        /* o conceito deste teste é 9 + (-3) = 6  aqui estou passando os valores como string. 
            e o + tem a função de concatenação '9-3' 'e igual a 6 ?*/
            expect(Calculadora.multiplicar('2', '3')).toEqual(6)       
    });

    it('deve retornar 4.5 quando o utilizador digitar 1.5 * 3', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5)
    });

    it('deve retornar ZERO quando o primeiro valor digitado não for numerico', () => {
        expect(Calculadora.multiplicar(undefined, 5)).toEqual(0)
    });

    it('deve retornar ZERO quando o segundo valor digitado não for numerico', () => {
        expect(Calculadora.multiplicar(5, undefined)).toEqual(0)
    });
});