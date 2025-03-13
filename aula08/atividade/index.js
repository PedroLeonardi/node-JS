const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const rotaProduto = require('./rotasProdutos');
const rotaUsuario = require('./rotasUsuarios');
const rotaAdmin = require('./rotasAdmin');


const logger = (req, res, next)=>{
    const data = new Date();
    console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
    next();
}

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Página Inical</h1>')
})

app.use('/produtos', rotaProduto);
app.use('/usuarios', rotaUsuario);
app.use('/admin', rotaAdmin);
app.use((req,res) =>{
    res.status(404).send('Pagina Não encontrada!!!');
});

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});