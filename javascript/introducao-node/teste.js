const dayjs = require('dayjs')
const dataAtual = dayjs()

console.log(dataAtual.format('YYYY-MM-DD'))
console.log(dataAtual.toString())
console.log(dataAtual.add(1,'m').toString())