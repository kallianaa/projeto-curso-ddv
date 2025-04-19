


let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"]
console.log(frutas.push('pera'))
console.log(frutas.pop())
console.log(frutas.shift())

console.log(frutas.length)

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]
    console.log(i, fruta)
}