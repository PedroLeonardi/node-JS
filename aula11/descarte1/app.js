const express = require('express');
const rotasContato = require('./router/rotasContato');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.status(200).send('Página inicial');
})

app.use('/contatos', rotasContato)

app.listen(port, ()=>{
    console.log(`Servidor rodando na em http://localhost:${port}`)
})
