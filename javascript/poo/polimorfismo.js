class Instrumento {
    tocar () {
        console.log("Tocando um som genérico.");
    }
}

class Violao extends Instrumento{
    tocar () {
        console.log("Tocando um som de violão.");
    }
}

class Piano extends Instrumento{
    tocar () {
        console.log("Tocando um som de piano.");
    }
}

class Violino extends Instrumento{
    tocar () {
        console.log("Tocando um som de violino.");
    }
}

const instrumentos = [new Violao(), new Piano(), new Violino()]
for (const instrumento of instrumentos){
    instrumento.tocar();
}