/*const numeros = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];*/

/*const soma = [...numeros, ...numeros2]

console.log(soma);

const pessoa = {nome: "Nala", idade: 5};
const endereco = {cidade: "Porto Alegre", estado: "RS"};

const combinacao = {
    ...pessoa,
    ...endereco
}


console.log(combinacao);

function somar(...numeros){
    let total = 0;

    numeros.forEach(numero => total += numero)
    return total;
}

const total = somar(1, 2, 3, 4, 5) //  15
console.log(total);*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const [ primeiro, segundo,...resto] = numeros;

console.log(primeiro, segundo);
console.log(resto);

const pessoa = {nome: "Nala", idade: 5, cidade: "Porto Alegre"};
const {nome, ...restoPessoa} = pessoa;
console.log(restoPessoa);
