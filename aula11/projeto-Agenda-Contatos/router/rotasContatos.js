import express from 'express'
import fs from 'fs'
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

let contatos = [];
try {
    const data = fs.readFileSync('./data/contatos.json', 'utf8');
    contatos = JSON.parse(data);
} catch (erro) {
    console.error('Houve um erro ao ler o JSON de contatos', erro);
    contatos = [];
};


router.get('/', (req,res)=>{
    res.status(200).send(contatos)
});

router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const contato = contatos.find(p => p.id === id);
    res.send(contato)
})

router.post('/envio', (req,res)=>{
    const novoItem = req.body
    console.log("Produto enviado com Sucesso", JSON.stringify(novoItem));
    res.send("Produto enviado com Sucesso")
})

router.options("/", (req,res)=>{
    res.header('Allow', 'GET');
    res.status(204).send();
})

router.options("/envio", (req,res)=>{
    res.header('Allow', 'POST');
    res.status(204).send();
})




export default router;