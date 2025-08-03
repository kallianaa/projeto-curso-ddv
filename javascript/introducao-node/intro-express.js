const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    return res.send('Hello World')
}) //crei uma rota

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')
}) //aqui é a porta