var Calculadora = {

    adicionar: function(num1, num2) {

        /* Implementação para o caso de teste 4. se o primeiro valor digitado não for um numero, retorne 0*/
        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }

        /* O parseInt faz a conversão do numero para inteiro*/

        /* Resolveu o caso de teste 2 mas deu erro no caso de teste 3
           num1 = parseInt(num1)
           num2 = parseInt(num2) 
        */

           num1 = parseFloat(num1)
           num2 = parseFloat(num2)

        return num1 + num2
    },

    subtrair: function(num1, num2) {
        return 0
    },

    dividir: function(num1, num2) {
        return 0
    },

    multiplicar: function(num1, num2) {
        return 0
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora
}