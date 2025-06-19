console.log("************************************************")
console.log("EXERCÍCIO 1")
//Declare uma variável usando var, outra com let e outra com const.
//Modifique o valor das variáveis declaradas com var e let. Tente alterar a variável const e observe o que acontece.

var variavelVar = 10;
let variavelLet = 20;
const variavelConst = 30;
variavelVar = 15;
variavelLet = 25;
// variavelConst = 35; // Isto gera erro
console.log(variavelVar, variavelLet, variavelConst);

console.log("************************************************")
console.log("EXERCÍCIO 2")
//Crie uma variável do tipo number e outra do tipo string. Converta a variável do
//tipo number para string e a do tipo string para number.

let num = 42;
let str = "123";
let numToStr = num.toString();
let strToNum = Number(str);
console.log(numToStr, strToNum);

console.log("************************************************")
console.log("EXERCÍCIO 3")
//Defina duas variáveis booleanas (true e false) e use operadores lógicos (AND, OR, NOT)
//para criar diferentes combinações de resultados.

let boolTrue = true;
let boolFalse = false;
console.log(boolTrue && boolFalse); // false
console.log(boolTrue || boolFalse); // true
console.log(!boolTrue); // false

console.log("************************************************")
console.log("EXERCÍCIO 4")
//Escreva um código que use uma estrutura condicional (if/else) para verificar
//se um número é positivo, negativo ou zero.

let numero = -10;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

console.log("************************************************")
console.log("EXERCÍCIO 5")
//Utilize o operador ternário para verificar se uma idade é maior ou igual a 18.
//Exiba "Maior de idade" ou "Menor de idade" com base na condição.

let idade = 18;
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");

console.log("************************************************")
console.log("EXERCÍCIO 6")
//Crie um laço for que exiba todos os números de 1 a 10 no console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("************************************************")
console.log("EXERCÍCIO 7")
//Usando um laço while, some os números de 1 a 100 e exiba o resultado final no console.

let i = 1, soma = 0;
while (i <= 100) {
    soma += i;
    i++;
}
console.log(soma);

console.log("************************************************")
console.log("EXERCÍCIO 8")
//Declare uma função que receba dois números como parâmetros e retorne a soma deles.
//Chame essa função e exiba o resultado no console.
function somar(numeroA, numeroB){
    return numeroA + numeroB
}

let resultado = somar (77,33)
console.log(resultado) // Isso imprimirá 4

console.log("************************************************")
console.log("EXERCÍCIO 9")
//Crie um array com os nomes de 5 frutas. Exiba o terceiro item do array no console.
//Depois, adicione uma fruta ao final do array e remova a primeira fruta. Exiba o array atualizado.

let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
console.log("o terceiro item é:" + frutas[3]);
console.log("Adicionando uma fruta no final: " + frutas.push('melancia'))
console.log("Removendo a primeira fruta: " + frutas.shift()) //remove o primeiro elemento de um array e o retorna
console.log("Lista atualizada: " + frutas.length)

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]
    console.log(i, fruta)
}


console.log("************************************************")
console.log("EXERCÍCIO 10")
//Crie um objeto que represente uma pessoa, contendo as propriedades nome, idade e profissão.
//Acesse e exiba o valor da propriedade nome.

let pessoa ={
    nome: "Thaina",
    idade: 30,
    profissao: "Enfermeira"
};
console.log(pessoa.nome)

console.log("************************************************")
console.log("EXERCÍCIO 11")
//Adicione uma nova propriedade chamada hobby ao objeto criado no exercício anterior.
//Atualize o valor da propriedade idade para um número diferente.

pessoa.hobby = "Estudar";
pessoa.idade = 31;
console.log(pessoa)

console.log("************************************************")
console.log("EXERCÍCIO 12")
//Crie uma função que receba um array de números e retorne apenas os números pares.

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function numerosPares(array){
    return array.filter(num => num % 2 === 0);
}
console.log(numerosPares(numerosArray));


console.log("************************************************")
console.log("EXERCÍCIO 13")
//Faça um programa que use uma estrutura de repetição (for)
// para calcular o fatorial de um número previamente definido.

let numeroFatorial = 5; //5!=5×4×3×2×1=120
let fatorial = 1; // 1 porque multiplicar por 1 não altera o produto

for (let i = 1; i <= numeroFatorial; i++) {
        fatorial *= i; // Multiplica o fatorial pelo número atual do loop
}
console.log(`O fatorial de ${numeroFatorial} é ${fatorial}.`);


console.log("************************************************")
console.log("EXERCÍCIO 14")
//Defina dois objetos que representem livros, contendo título, autor e ano de publicação.
//Crie uma função que compare os anos de publicação e determine qual livro foi publicado primeiro.

const livro1 = {
    titulo: 'A história do futebol',
    autor: "Cazé",
    anoPublicacao: 2000
}

const livro2 = {
    titulo: 'A história da Lua',
    autor: "Castanhari",
    anoPublicacao: 1999
}
function comparacaoPublicadoPrimeiro (livro1, livro2){
    const anoLivro1 = livro1.anoPublicacao;
    const anoLivro2 = livro2.anoPublicacao;

    if (anoLivro1 < anoLivro2) {
        return (`${livro1.titulo} (de ${livro1.autor}) foi publicado primeiro, em ${anoLivro1}.`);
    } else if (anoLivro2 < anoLivro1) {
        return (`${livro2.titulo} (de ${livro2.autor}) foi publicado primeiro, em ${anoLivro2}.`);
    } else {
        return (`Ambos os livros, "${livro1.titulo}" e "${livro2.titulo}", foram publicados no mesmo ano (${anoLivro1}).`);
    }
}

console.log(comparacaoPublicadoPrimeiro(livro1, livro2));