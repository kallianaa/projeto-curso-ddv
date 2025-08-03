function saudacao(nome){
    console.log('Olá', nome)
}

// module.exports = {
//     saudacao,
//     nome: "Kalliana"
// }

module.exports = (nome) => {
    console.log("olá, estou em outro modulo");
    console.log(nome)
}