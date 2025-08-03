const fs = require("fs");
const path = require("path");

// fs.writeFileSync('resultado.txt', 'Olá estou gravando esse arquivo')
// fs.mkdirSync('teste')
// fs.readFileSync('.teste')
// fs.writeFileSync('./teste/teste.txt', 'Olá estou dentro desse arquivo')
// const arquivo = fs.readFileSync('./teste/teste.txt')
// console.log(arquivo.toString())

// Constrói o caminho para o diretório pai ('javascript') de forma segura
const diretorioJavascript = path.join(__dirname, '..');
const conteudo = fs.readdirSync(diretorioJavascript);
console.log(conteudo);
