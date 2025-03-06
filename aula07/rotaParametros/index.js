const express = require('express')
const app = express();
const port = 3000;

app.use(express.json()); //middlewere É OBRIGATORIO PARA POSTS, convertes e trata a insfomaçoes para serem lidas (usa automatico)
app.use(express.urlencoded({ extended: true })) //middlewere para RECEBER INFORMAÇÃO FORMULARIO/FORM

const lista = [
    {
        "nome": "giovanna",
        "idade": 19,
        "id": 3
    },
    {
        "nome": "pedro",
        "idade": 20,
        "id": 2
    }
];

app.get("/", (req, res) => {
    res.send('<h1>Bom dia</h1>');
})

app.get('/lista/:id', (req, res) => { //um parametro
    const id = req.params.id; //reqisita o paramentro id (especificado na url)
    res.send(`Detalhes do usuarios com o ID: ${id}`);
})

app.get('/categorias/:categoria/produtos/:produtoId', (req, res) => { //multiplos paramnetos

    const categoria = req.params.categoria;
    const produtoId = req.params.produtoId;

    res.send(`A categoria do produto é: ${categoria}. E o id do produto é ${produtoId}`);
});

app.post('/produtos', (req, res) => { //POST usando express
    const novoProduto = req.body;
    console.log('Novo Produto', novoProduto);
   // res.json(novoProduto) //responde com o modelo json
    res.send('Produto criado com sucesso!!!');
});

app.options('/produtos', (req, res)=>{
    res.header('Allow', 'POST');
    res.status(204).send();
})






app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});

