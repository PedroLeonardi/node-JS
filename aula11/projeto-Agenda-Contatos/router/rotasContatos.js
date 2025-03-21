import express from 'express'
import fs from 'fs'
const router = express.Router();


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



export default router;