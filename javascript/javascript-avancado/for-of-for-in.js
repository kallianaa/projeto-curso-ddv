const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (const numero of numeros){
    // console.log(numero)
} //cada vez que iterar vai passar para o proximo campo do array

const palavra = "JavaScript";
for (const caracter of palavra){
    // console.log(caracter);
}


const produto = {
    nome: 'Notebook',
    preco: 1500,
    temEstoque: true,
    marca: 'Dell'
}

for (const propriedade in produto){
    console.log(propriedade, produto[propriedade]); //busca a variavel e o nome atribuido da variavel
}