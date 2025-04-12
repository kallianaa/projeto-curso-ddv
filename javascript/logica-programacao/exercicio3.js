//! EXERCICIOS
//1 - Soma de Números - Crie um algoritmo que some dois números e exiba o resultado no console.

let numero1 = 77
let numero2 = 33

console.log("A soma dos números é: " + (numero1 + numero2));

//2 - Validação de Idade - Faça um programa que determine se uma idade predefinida
// é maior ou menor de 18 anos e exiba a mensagem correspondente.

let idade = 17
if (idade >= 18) {
    console.log("Maior de 18 anos");
} else {
    console.log("Menor de 18 anos");
}

//3 - Tabuada Desenvolva um algoritmo que exiba a tabuada de um número predefinido, do 1 ao 10.

let tabuada = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tabuada * i);
}

//4 - Par ou Ímpar - Crie um programa que verifica se um número predefinido
// é par ou ímpar e exiba a resposta no console.

let parOuImpar = 10;
if (parOuImpar % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//5 - Calculadora de Média Desenvolva um algoritmo que calcule a média de três notas predefinidas
// e determine se o aluno foi aprovado ou reprovado (média mínima: 7).

let media1 = 5
let media2 = 7
let media3 = 9

let media = (media1 + media2 + media3) / 3;
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//6 - Descubra o Maior Número Escreva um algoritmo que compare três números predefinidos
// e determine qual deles é o maior.

let a = 5;
let b = 8;
let c = 3;
let maior = a;
if (b > maior) {
    maior = b;
}
if (c > maior) {
    maior = c;
}
console.log("O maior número é " + maior);