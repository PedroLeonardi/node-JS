const express = require('express');
const app = express();
const port = 3000;

const autenticar = (req, res, next) =>{
    // Simulação de autenticação: NUNCA usar em produção!!!
    const token = req.headers['authorization'];
    if (token === 'SEGREDO'){
      next() //autenticado
    } else {
        res.status(401).send('Não Autorizado');
    };
};

app.get('/admin', autenticar, (req, res)=>{
    res.status(200).send('<h1>Paiel de Administração</h1>')
})

app.get('/', (req, res) =>{
res.status(200).send('<h1>Página Incial</h1>');
});


app.listen (port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
// curl -i http://localhost:3000/admin/ -H 'authorization: Bearer SEGREDO' -H 'Content-Type: application/json;charset=UTF-8'