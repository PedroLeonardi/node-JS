const express = require('express');
const router = express.Router();
const fs = require('fs')

let contatos = [];
try {
    const data = fs.readFileSync('./data/dataContatos.json', 'utf8');
    contatos = JSON.parse(data);
} catch (erro) {
    console.error('Houve um erro ao ler o JSON de contatos', erro);
    contatos = [];
};

router.get('/', (req,res)=>{
    res.status(200).send(contatos)
});

router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const contato = contatos.find(p => p.id === id);
    res.send(contato)

})

router.post()

router.delete
 
    // if(contato) {
    //     res.status(200).json(contato)
    // } else {
    //     res.status(404).send('Houve um erro ao acessar o arquivo')
    // }
// })



module.exports = router;
