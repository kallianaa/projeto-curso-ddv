let indice
for (indice = 0; indice < 20; indice++){
    console.log(indice)
    console.log("boa tarde")
}
// 20
// O for é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira.
// A variável índice é inicializada com o valor 0, e a condição do loop é que índice seja menor que 20.
// A cada iteração, o valor de índice é incrementado em 1 (por padrão). Dentro do loop,
// são exibidas as mensagens "boa tarde" e o valor atual de índice. Após o término do loop,
// o valor final de índice (20) é exibido.
// Isso demonstra como usar o loop for para executar ações repetidamente até que uma condição seja atendida.

console.log("----------------------------")
let contador = 0
while (contador < 20){
    console.log("Executando")
    contador++
}
// 20 o while é uma estrutura de repetição que executa
// um bloco de código enquanto uma condição for verdadeira.
console.log("----------------------------")

let indice1
for (indice1 = 0; indice1 < 20; indice1++){
    console.log(indice1)
    if (indice1 == 10) break
}

console.log("----------------------------")

let indice2
for (indice2 = 0; indice2 < 20; indice2++){
    if (indice2 == 10) continue

    console.log(indice2)
}

console.log("----------------------------")

let indice3
for (indice3 = 0; indice3 < 20; indice3++){
    if (indice3 % 2 == 0) continue

    console.log(indice3)
}

console.log("----------------------------")

let indice4
for (indice4 = 0; indice4 < 20; indice4++){
    if (indice4 % 2 != 0) continue

    console.log(indice4)
}