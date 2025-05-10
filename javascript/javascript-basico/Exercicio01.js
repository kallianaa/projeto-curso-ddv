console.log("************************************************")
//Declare uma variável usando var , outra com let e outra com const . Modifique
// o valor das variáveis declaradas com var e let . Tente alterar a variável const e
// observe o que acontece.

var variavelVar = 10;
let variavelLet = 20;
const variavelConst = 30;
variavelVar = 15;
variavelLet = 25;
// variavelConst = 35; // Isto gera erro
console.log(variavelVar, variavelLet, variavelConst);


console.log("************************************************")
//Crie uma variável do tipo number e outra do tipo string . Converta a variável do
// tipo number para string e a do tipo string para number .

let num = 42;
let str = "123";
let numToStr = num.toString();
let strToNum = Number(str);
console.log(numToStr, strToNum);


console.log("************************************************")
//Defina duas variáveis booleanas ( true e false ) e use operadores lógicos (AND,
// OR, NOT) para criar diferentes combinações de resultados.

let boolTrue = true;
let boolFalse = false;
console.log(boolTrue && boolFalse); // false
console.log(boolTrue || boolFalse); // true
console.log(!boolTrue); // false


console.log("************************************************")
//Escreva um código que use uma estrutura condicional ( if/else ) para verificar
// se um número é positivo, negativo ou zero.

let numero = -10;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}


console.log("************************************************")
//Utilize o operador ternário para verificar se uma idade é maior ou igual a 18.
// Exiba "Maior de idade" ou "Menor de idade" com base na condição.

let idade = 18;
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");


console.log("************************************************")
//Crie um laço for que exiba todos os números de 1 a 10 no console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("************************************************")
//Usando um laço while , some os números de 1 a 100 e exiba o resultado final no
// console.

let i = 1, soma = 0;
while (i <= 100) {
    soma += i;
    i++;
}
console.log(soma);


console.log("************************************************")
//Declare uma função que receba dois números como parâmetros e retorne a
// soma deles. Chame essa função e exiba o resultado no console.



console.log("************************************************")
//Crie um array com os nomes de 5 frutas. Exiba o terceiro item do array no
// console. Depois, adicione uma fruta ao final do array e remova a primeira fruta.
// Exiba o array atualizado.




console.log("************************************************")
//Crie um objeto que represente uma pessoa, contendo as propriedades nome ,
// idade e profissão . Acesse e exiba o valor da propriedade nome .



console.log("************************************************")
//Adicione uma nova propriedade chamada hobby ao objeto criado no exercício
// anterior. Atualize o valor da propriedade idade para um número diferente.



console.log("************************************************")
//Crie uma função que receba um array de números e retorne apenas os
// números pares.




console.log("************************************************")
//Faça um programa que use uma estrutura de repetição ( for ) para calcular o
// fatorial de um número previamente definido.




console.log("************************************************")
//Defina dois objetos que representem livros, contendo título , autor e ano de
// publicação . Crie uma função que compare os anos de publicação e determine
// qual livro foi publicado primeiro.



