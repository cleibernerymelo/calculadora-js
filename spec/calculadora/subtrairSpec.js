describe('Suite de testes de subtracao', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair('8', '3')).toEqual(5)
    });

    it('deve retornar 5 mesmo se o utilizador passar 8 e 3 em formato texto', () => {
        /* o conceito deste teste é 9 + (-3) = 6  aqui estou passando os valores como string. 
            e o + tem a função de concatenação '9-3' 'e igual a 6 ?*/
            expect(Calculadora.subtrair(8, 3)).toEqual(5)       
    });

    it('deve retornar 4 quando o utilizador digitar 1.5 + 3', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4)
    });

    it('deve retornar ZERO quando o primeiro valor digitado não for numerico', () => {
        expect(Calculadora.subtrair(undefined, 5)).toEqual(0)
    });

    it('deve retornar ZERO quando o segundo valor digitado não for numerico', () => {
        expect(Calculadora.subtrair(5, undefined)).toEqual(0)
    });
});