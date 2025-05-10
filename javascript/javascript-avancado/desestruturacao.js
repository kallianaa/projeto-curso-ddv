/*const pessoa = {
    nome: 'Nala',
    idade: 5,
    cidade: 'Porto Alegre'
};


const {idade: anos} = pessoa;

console.log(anos); // 5

const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo); // 1*/
console.log("**************************************************************");

function apresentar(pessoa) {
    console.log(`
        Meu nome é ${pessoa.nome}, e tenho ${pessoa.idade} anos.
   `)
}

const pessoa  = {
    nome: "Nala",
    idade: 5,
    cidade: "Porto Alegre"
};

apresentar(pessoa);

function somarEMultiplicar(a, b) {
    return [a + b, a * b];
}
const resultado = somarEMultiplicar(5, 10);
let soma = resultado[0];
let multiplicacao = resultado[1];
console.log(soma, multiplicacao); // Soma: 15, Multiplicação: 50