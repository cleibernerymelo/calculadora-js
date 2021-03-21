describe('Suite de testes de divisao', () => {

    var Calculadora = require('../../src/js/calculadora')

    it('deve retornar 2 para 6 e 3', () => {
        expect(Calculadora.dividir('6', '3')).toEqual(2)
    });

    it('deve retornar 2 mesmo se o utilizador passar 6 e 3 em formato texto', () => {
        /* o conceito deste teste é 9 + (-3) = 6  aqui estou passando os valores como string. 
            e o + tem a função de concatenação '9-3' 'e igual a 6 ?*/
            expect(Calculadora.dividir(6, 3)).toEqual(2)       
    });

    it('deve retornar 1.5 quando o utilizador digitar 4.5 / 3', () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5)
    });

    it('deve retornar "Erro" para divisão por 0', () => {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro')
    });

    it('deve retornar ZERO quando o primeiro valor digitado não for numerico', () => {
        expect(Calculadora.dividir(undefined, 5)).toEqual(0)
    });

    it('deve retornar ZERO quando o segundo valor digitado não for numerico', () => {
        expect(Calculadora.dividir(5, undefined)).toEqual(0)
    });
});