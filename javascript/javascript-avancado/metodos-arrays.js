const numeros = [1, 2, 3, 4, 5];

// numero.forEach((elemento) => {
//     console.log(elemento)
// })


// const arrayDobrado = numeros.map((elemento) => {
//     return elemento *2
// }) é a mesma coisa que a linha de baixo

const arrayDobrado = numeros.map(elemento => elemento *2)
// console.log(arrayDobrado);

// const arrayFiltrado = numeros.filter((elemento) => { //se for falso ele nao entra no array
//     return elemento % 2 === 0; //pega os numeros pares
// })
//
// console.log(arrayFiltrado);


// const pesquisa = numeros.find((elemento) => { //se for falso ele nao entra no array
//     return elemento == 3; //FIND pega os numeros, no caso aqui é 3
// })
//
// console.log(pesquisa);


// const some = numeros.some((elemento) => {
//     return elemento === 1 // pelo menos algum dos elementos precisa ser o nmero 1
// })
//
// console.log(some);
//
// const every = numeros.every((elemento) => {
//     return elemento === 10 // vai verificar se TODOS os elementos condizem com o numero 10
// })
//
// console.log(every);



//! DESAFIO
//* Com base na lista de produtos abaixo use o FILTER para encontrar produtos com preço menor que 50
//* Use o MAP para colocar os nomes em caixa alta
//* Itere sobre o array com caixa alta
//* Verifique se todos os produtos custam mais de 100


const produtos = [
    { nome: 'Notebook', preco: 3000},
    { nome: 'Teclado', preco: 100},
    { nome: 'Mouse', preco: 49},
    { nome: 'Monitor', preco: 800}
]

//FILTER
const produtosMenor50 = produtos.filter((produto) => {
    return produto.preco < 50; //pega os numeros pares
})
console.log(produtosMenor50);

//MAP
const novaLista = produtos.map((produto) => {
    return {
        ...produto,
        nome: produto.nome.toUpperCase()
    }
})
console.log(novaLista)

//CAIXA ALTA
novaLista.forEach((produto) => {
    console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco}`)
})



//CUSTAM + DE 100
const custamMaisDe100 = produtos.every((produto) => {
    return produto.preco > 100 // vai verificar se TODOS os preços custam mais de 100
})

console.log(custamMaisDe100);