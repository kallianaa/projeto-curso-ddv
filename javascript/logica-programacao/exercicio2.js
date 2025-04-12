//! EXERCICIO 2
//escreva um código que exiba "bom dia", "boa tarde" ou "boa noite"
// dependendo da variável horário


let hora = 15;

if (hora < 12){
    console.log("Bom dia");
} else if (hora < 18){
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}