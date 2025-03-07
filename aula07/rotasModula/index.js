const express = require('express');
const app = express();
const rotasUsuarios = require('./rotasUsuarios'); //importa as rotas do arquivo rotas usuarios
const rotasProdutos = require('./rotasProdutos'); // importa as rotas do arquivo de produtos
const port = 3000;

app.use(express.json()); //middlewere É OBRIGATORIO PARA POSTS, convertes e trata a insfomaçoes para serem lidas (usa automatico)
app.use(express.urlencoded({ extended: true })) //middlewere para RECEBER INFORMAÇÃO FORMULARIO/FORM


app.get("/", (req, res)=>{
    res.status(200).send('<h1>Pagina inical</h1>');
});

app.use('/usuarios', rotasUsuarios) // rotas especificada do rotasUsuarios e passa o paramentro do require rotasUsuarios

app.use('/produtos', rotasProdutos)

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});