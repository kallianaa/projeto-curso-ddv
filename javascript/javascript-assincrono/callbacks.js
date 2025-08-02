// console.log('INICIO');
//
// function rodarDepoisDe2Segundos(callback){
//     setTimeout(() => {
//         callback('isso aqui acabou de executar')
//     }, 2000);
//
// }
//
// rodarDepoisDe2Segundos((mensagem) => {
//     console.log(mensagem)
// })
//
// console.log('FIM');

function prepararIngredientes(callback){
    console.log('Preparando os ingredientes...');
    setTimeout(() =>{
        console.log("Ingredientes preparados.");
        callback();
    }, 2000);
}

function cozinhar(callback){
    console.log("Cozinhando...");
    setTimeout(() =>{
        console.log("Prato pronto.");
        callback();
    }, 3000);
}

function servir(callback){
    console.log("Servindo prato.");

    setTimeout(() => {
        console.log("Prato servido!");
        callback();
    },4000)
}

prepararIngredientes(() => {
    cozinhar(() => {
        servir(() => {
            console.log("Finalizado")
        })
    })
})