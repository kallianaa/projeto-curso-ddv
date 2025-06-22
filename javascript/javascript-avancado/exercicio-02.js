console.log("************************************************")
console.log("EXERCÍCIO 1")
//Crie uma variável com valor null e outra com undefined.
// Use um if/else para verificar se as variáveis têm valor ou não.
// Explique o comportamento no console.
let VariavelUndefined;
let VariavelNull = null;

if (VariavelNull) {
    console.log("VariavelNull TEM valor");
} else {
    console.log("VariavelNula NÃO TEM valor");
}

if (VariavelUndefined) {
    console.log("VariavelUndefined TEM um valor");
} else {
    console.log("VariavelUndefined NÃO TEM valor");
}

console.log("************************************************")
console.log("EXERCÍCIO 2")
//Utilize a desestruturação para extrair valores de um objeto que representa um usuário, contendo nome, idade e email.
// Depois, use a desestruturação para extrair elementos de um array com três números.

const usuario = {
    nome: "Nala",
    idade: 5,
    email: "nalinha@hotmail.com"
};
const { nome, idade, email} = usuario;
console.log(nome, idade, email);

const numerosArray = [1, 2, 3]
const [primeiro, segundo, terceiro] = numerosArray;
console.log(primeiro, segundo, terceiro);

console.log("************************************************")
console.log("EXERCÍCIO 3")
//Implemente uma função que use o operador rest para receber uma quantidade
// indefinida de números como argumentos e retorne a soma deles.

function somarRest(...numerosRest){
    let total = 0;
    numerosRest.forEach((numero => total += numero))
    return total
}
const total = somarRest (15, 30, 45, 60)
console.log(total);

console.log("************************************************")
console.log("EXERCÍCIO 4")
//Utilize o operador spread para combinar dois arrays e, em seguida,
// para criar uma cópia de um objeto adicionando uma nova propriedade.

const numerosSpread1 = [10, 20, 30, 40, 50]
const numerosSpread2 = [60, 70, 80, 90, 100]
const copia = [...numerosSpread1, ...numerosSpread2]
console.log(copia);

const objetoOriginal = {a: 1, b: 2};
const objetoModificado= { ... objetoOriginal, c :3};
console.log(objetoModificado);

console.log("************************************************")
console.log("EXERCÍCIO 5")
//Escreva uma função que utilize arrow functions para calcular a potência de um número (base elevado ao expoente).

const potencia = (base, expoente) =>  base ** expoente;
console.log(potencia(3, 5));

console.log("************************************************")
console.log("EXERCÍCIO 6")
//Crie uma função que receba outra função como argumento (callback).
// A função principal deve executar a callback e exibir uma mensagem antes e depois de sua execução.

function argumentoCallback(callback){
    console.log("antes da execução");
    callback();
    console.log("depois da execução");
}
argumentoCallback(() => {
    console.log("Executando a função callback");
})

console.log("************************************************")
console.log("EXERCÍCIO 7")
//Pratique métodos de arrays: Use map para dobrar os valores de um array,
// filter para retornar apenas os valores pares
// e reduce para calcular a soma de todos os elementos do array.

const valoresArray = [1, 2, 3, 4, 5]
const arrayMap = valoresArray.map(numeros => numeros * 2);
console.log(arrayMap);

const arrayFilter = valoresArray.filter(numeros => numeros % 2 === 0);
console.log(arrayFilter);

const arrayReduce = valoresArray.reduce((soma, numeros) => soma + numeros, 0);
console.log(arrayReduce);

console.log("************************************************")
console.log("EXERCÍCIO 8")
//Implemente um código que utiliza o for...of para iterar sobre um array de strings
// e o for...in para iterar sobre as propriedades de um objeto.

const time = ["inter", "vermelho", "Porto Aegre", "saci"]
for (const times of time){
    console.log(time);
}

const timeFutebol = {
    nome: "inter",
    cor: "vermelho",
    cidade: "Porto Alegre",
    mascote: "saci"
}

for (const propriedade in timeFutebol){
    console.log(propriedade);
}


console.log("************************************************")
console.log("EXERCÍCIO 9")
//Transforme um objeto em uma string JSON usando JSON.stringify e, em seguida,
// reconverta para um objeto usando JSON.parse .

const timeDeFutebol = {
    nome: "inter",
    cor: "vermelho",
    cidade: "Porto Alegre",
    mascote: "saci"
}

console.log(JSON.stringify(timeDeFutebol));
const timeDeFutebol1 = JSON.parse(`
{
  "nome": "inter",
  "cor": "vermelho",
  "cidade": "Porto Alegre",
  "mascote": "saci"
}
`)
console.log(timeDeFutebol1)

console.log("************************************************")
console.log("EXERCÍCIO 10")
//Crie um código que combine desestruturação, operador spread e métodos de arrays.
// Por exemplo, extraia o primeiro elemento de um array, use spread para pegar o restante,
// e aplique um método (map, filter, etc.) no array restante.


