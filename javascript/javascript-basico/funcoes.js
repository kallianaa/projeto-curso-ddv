
function darBoaTarde(nome) {
    console.log("Bom dia", nome)
    console.log("Boa tarde", nome)
    console.log("Boa noite", nome)
}
darBoaTarde("Kalliana")

console.log("----------------------------")

function somar(numeroA, numeroB){
    return numeroA, numeroB
}

let resultado = somar (1,3)

console.log("----------------------------")

//! DESAFIO
//* faça uma função que simula uma calculadora
//* ela irá receber 2 numeros e uma string representando a operação
//* deve retornar o valor

//* exemplo: calcular(1, 2, "+") deve retornar 3

function calculadora(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
        case "x":
            return a * b
        case "/":
            return a / b
        default:
            console.log("Operador inválido")
            return
    }
}

let calculo = calculadora (10,3, '*')
console.log(calculo)