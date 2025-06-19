

let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
console.log(frutas.push('pera')) //adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array
console.log(frutas.pop()) //remove o último elemento de um array e o retorna
console.log(frutas.shift()) //remove o primeiro elemento de um array e o retorna

console.log(frutas.length)

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]
    console.log(i, fruta)
}