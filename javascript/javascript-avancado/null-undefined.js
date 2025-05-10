let a
console.log(a)

function saudacao(){
    console.log('olá')
}

let retorno = saudacao()
console.log(retorno) // gera undefined

let pessoa = {
    nome: 'João'
} //gera undefined (que é quando nao foi definido)

let pessoa = {
    nome: 'João',
    idade: null // gera null (que é quando foi definido e voce ainda nao quer dar um valor)
}

let variavel = null
console.log(variavel) // gera null

console.log(null == undefined) // gera true
console.log(null === undefined) // gera false
