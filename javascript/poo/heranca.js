class Animal{
    constructor(nome) {
        this.nome = nome;
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
    miar(){
        console.log(`${this.nome}, que é da cor ${this.cor}, está miando` )
    }

    comer(){
        console.log(`O gatinho ${this.nome} está comendo`);
    }
}

const gato = new Gato('Teco', 'Laranja');
gato.miar();
gato.comer();


class Cachorro extends Animal {
    latir(){
        console.log('Au Au')
    }
}

const cachorro = new Cachorro('Bolinha');
cachorro.latir()
cachorro.comer()
