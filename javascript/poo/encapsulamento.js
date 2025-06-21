class Cofre{
    #senha
    #saldo

    constructor(senha) {
        this.#senha = senha;

        this.#saldo = 0;
    }

    #validarSenha(senha){
        return senha === this.#senha;
    }

    verSaldo(senha){
        if(this.#validarSenha(senha)){
            console.log(`Saldo do cofre: R$ ${this.#saldo}`);
        } else {
            console.log('Senha inválida');
        }
    }

    depositar(senha, valor){
        if (this.#validarSenha(senha)){
            this.#saldo += valor;
        } else {
            console.log('Senha inválida');
        }
    }

    sacar(senha, valor){
        if (this.#validarSenha(senha)){
            if (valor > this.#saldo){
                console.log('O valor a ser retirado é maior do que o saldo');
            } else {
                this.#saldo -= valor;
                console.log(`${valor} foi retirado, saldo restante: R$ ${this.#saldo}`);
            }
        } else{
            console.log('Senha inválida');
        }
    }
}

const cofre = new Cofre('12345');
cofre.depositar('12345', 100);
cofre.verSaldo('12345');
cofre.sacar('12345', 70)
cofre.verSaldo('12345');
