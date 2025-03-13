const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) =>{
    const data = new Date();
    console.log(`[${data.toISOString()}] ${req.method} ${req.url}`)
    next();
};

app.use(logger);// sera utlizado em todas as rotas do sistema

app.get('/', (req,res)=>{
    res.status(200).send('<h1>Página inical</h1>');
});
app.get('/produtos', (req,res)=>{
    res.status(200).send('Pordutos');
});

app.listen( port, ()=>{
    console.log(`Servidor operando em: http://localhost:${port}`);
});