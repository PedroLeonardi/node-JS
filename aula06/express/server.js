const express = require('express');
const app = express();
const port = 3000;

const produtos = [
    {id: 1, nome: "produtos A", preço: 10},
    {id: 2, nome: "produtos B", preço: 20},
    {id: 3, nome: "produtos C", preço: 30}
]

app.get('/', (req, res)=>{ //rota principal
    res.send('<h1>Home</h1>');

}); 

app.get('/produtos', (req , res) =>{ //rota produtos
    res.send(JSON.stringify(produtos));
});

app.get('/produtos/:id', (req, res) =>{ //rota id
    const id = req.params.id;
    // res.send(`Detalhes do produto com ID: ${id}`);
    const produto = produtos.find(p => p.id === parseInt(id))
    
    if (produto) {
        res.send(produto)
    } else {
        res.status(404). send('ERRO 404 pagina não encontrada')
    }
});

app.use((req, res)=>{ //rota para erros 
    res.status(404).send("<p style='color:red'>pagina não encontrada</p>")
})

app.listen(port, ()=>{
console.log(`servidor rodando em http://localhost:${port}`);
});