let verdadeiro = true
let falso = false

console.log(5 > 6)
console.log(5 < 6)
console.log(5 >= 6)
console.log(5 <= 6)

console.log(5 === '5')

let idade = 20
let temCarteira = true

if (idade >= 18 && temCarteira) { //&& operador E as duas condições precisam ser verdadeiras
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}

if (idade >= 18 || temCarteira) { // || as duas condições não precisam ser verdadeiras
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}
