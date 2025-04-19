const pessoa = {
    nome: 'Nala',
    idade: 5,
    hobbies: ["Passerar o dia dormindo", "Brincar com a bola", "Correr"],
    enderco: {
        rua: " Rua das Flores",
        numero: 123
    },
    apresentar(){
        console.log(this.nome, this.idade, this.enderco)
    }
}
pessoa.apresentar()

console.log("--------------------------")
function imprimirPessoa(pessoa){
    console.log(`Óla, meu nome é ${pessoa.nome} e eu moro na ${pessoa.enderco.rua}, ${pessoa.enderco.numero}`)
}

imprimirPessoa(pessoa)
