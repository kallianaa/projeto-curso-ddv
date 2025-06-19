class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}.`);
    }

    apresentacao(){
        console.log(`
            Nome: ${this.nome}
            Idade: ${this.idade}
            Profissão: ${this.profissao}
        `)
    }

    aniversario(){
        this.idade += 1
        console.log(`${this.nome} faz anivesário, e agora tem ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa("Nala", 5, "Cachorro")
const pessoa2 = new Pessoa("Thaina", 30, "Enfermeira")

pessoa1.aniversario()
pessoa2.aniversario()
pessoa1.apresentacao()
pessoa2.apresentacao()