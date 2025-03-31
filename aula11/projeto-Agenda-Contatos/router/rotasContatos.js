import express, { json } from 'express'
import fs from 'fs'
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function exibirContatos() {
    try {
        let dataContatos = [];
        const data = fs.readFileSync('./data/contatos.json', 'utf8');
        dataContatos = JSON.parse(data);
        return dataContatos
    } catch (erro) {
        console.error('Houve um erro ao ler e exibir o JSON de contatos', erro);
        return dataContatos = []
    };
}

function salvarDados(dados) {
    try {
        let dataJson = []
        const data = fs.readFileSync('./data/contatos.json', 'utf8');
        dataJson = JSON.parse(data)
        dataJson.push(dados)
        fs.writeFileSync('./data/contatos.json', JSON.stringify(dataJson, null, 2))

    } catch (error) {
        console.error('Houve um erro ao ler e salvar o JSON de contatos',error)
    }
}

function deletarDados(id) {

    try{
        let dataNonDelete = [];
        const AllData = fs.readFileSync('./data/contatos.json', 'utf8');
        const allDataJson = JSON.parse(AllData);
        dataNonDelete = allDataJson.filter(p => p.id !== id)
        fs.writeFileSync('./data/contatos.json', JSON.stringify(dataNonDelete, null, 2))
    } catch (err) {
        console.error('Houve um erro ao ler e deletar o JSON de contatos', err)
    }
}









router.get('/', (req,res)=>{
    res.status(200).send(exibirContatos())
});

router.get('/:id', (req,res)=>{
    
    const id = parseInt(req.params.id);
    const exibirContato = exibirContatos();
    const contato = exibirContato.find(p => p.id === id);
    res.status(200).send(contato)

})






router.post('/envio', (req,res)=>{
    const novoItem = req.body
    console.log("Produto enviado com Sucesso", novoItem);
    try {
        salvarDados(novoItem)
    } catch (error) {
        res.status(400).send("Houve um erro ao efetuar o salvamento", error.message) //OU É 400 OU 500
    }
    res.status(200).send("Produto enviado com Sucesso")
})


router.patch('/:id', (req, res)=>{ 

})



router.delete('/:id', (req,res)=>{ /////TEM QUE SER DELETE SOMENTE TESTE
    const id = parseInt(req.params.id)

    try {
        deletarDados(id);
        const item2 = JSON.stringify(exibirContatos()); // TESTE PARA RECEBIMENTO DO OBJETO 
        res.status(200).send(`deletado com sucesso: ${item2}`)
    } catch (error) {
        res.status(400).send("Houve um erro ao efetuar a exclusão", error.message)
    }
})

router.options("/", (req,res)=>{
    res.header('Allow', 'GET');
    res.status(204).send();
})

router.options("/envio", (req,res)=>{
    res.header('Allow', 'POST');
    res.status(204).send();
})

router.options("/:id", (req,res)=>{
    res.header('Allow', 'POST', 'DELETE');
    res.status(204).send();
})

// FEITO - GET, POST, DELETE


// FALTA - PATCH
// AUTENTICACAO
// LOGs



export default router;