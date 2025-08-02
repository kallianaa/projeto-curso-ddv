// const promise = new Promise((resolve, reject) => {
//     let deuCerto = false;
//
//     if (deuCerto){
//         resolve('Deu Certo')
//     } else {
//         reject('Deu errado')
//     }
// })
// promise
//     .then((resultado) => { //atribuido ao resolve
//         console.log(resultado)
//     })
//     .catch((resultado) => { //atribuido ao reject
//         console.log(resultado)
//     })

// function prepararIngredientes() {
//     return new Promise((resolve) => {
//         console.log('Preparando os ingredientes...');
//
//         setTimeout(() => {
//             console.log("Ingredientes preparados.");
//             resolve()
//         }, 2000);
//     })
// }
//
// function cozinhar() {
//     return new Promise((resolve) => {
//         console.log("Cozinhando...");
//
//         setTimeout(() => {
//             console.log("Prato pronto.");
//             resolve()
//         }, 3000);
//     })
// }
//
// function servir() {
//     return new Promise((resolve) => {
//         console.log("Servindo prato... ");
//
//         setTimeout(() => {
//             console.log("Prato servido!");
//             resolve()
//         }, 4000)
//     })
// }
//
// prepararIngredientes()
//     .then(() => cozinhar())
//     .then(() => servir())

fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((resposta) => {
        if (resposta.ok) {
            return resposta.json()
        } else {
            throw new Error('Deu erro')
        }
    })
    .then((respostaEmJson) => {
        console.log(respostaEmJson)
    })
    .catch((error) => {
        console.log(error)
    })