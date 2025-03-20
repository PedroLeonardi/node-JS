const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{ // não preisa especificar a rota pos vamos fazer isso no index
    res.status(200).send('Lista de Produtos');
});

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    res.send(`Detalhes dos Produrtos com ID: ${id}`);
})

router.post('/envios', (req, res)=>{
    const novosProdutos = req.body;
    console.log('Novo Produto', novosProdutos);
    res.status(201).send('Produto criado com sucesso!!!');
})

router.options('/', (req, res)=>{
    res.header('Allow', 'GET');
    res.status(204).send();
})

router.options('/:id', (req, res)=>{
    res.header('Allow', 'GET');
    res.status(204).send();
})

router.options('/envios', (req, res)=>{
    res.header('Allow', 'POST');
    res.status(204).send();
})



module.exports = router; // exportas a rota para o index