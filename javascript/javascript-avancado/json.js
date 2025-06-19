//JSON - JavaScript Object Notation

const pessoa = JSON.parse(`
{
    "nome": "Nala",
    "idade": 5,
    "hobbies": ["Correr", "Brincar", "Passear"],
    "endereco": { "rua": "Flores da Cunha", "numero": 151 }
}
`)

console.log(pessoa)