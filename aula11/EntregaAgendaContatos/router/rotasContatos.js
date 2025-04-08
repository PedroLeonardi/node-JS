import express from 'express'
import fs from 'fs'
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function writeLOG(dataLOG) {
    fs.appendFileSync('teste.txt', `\n${dataLOG}`)
}

const logger = (req, res, next) => {
    const data = new Date();
    const dataLOG = `[${data.toISOString()}] ${req.method} ${req.originalUrl}`
    console.log(`[${data.toISOString()}] ${req.method} ${req.originalUrl}`)
    writeLOG(dataLOG)
    next();
};

router.use(logger);

function lerContatosID(id) {
    try {
        let dataContatos = [];
        const data = fs.readFileSync('./data/contatos.json', 'utf8');
        dataContatos = JSON.parse(data);
        const idBase = dataContatos.find(p => p.id === id)

        if (idBase && idBase['id'] === id) {
            return true
        } else {
            return false
        }
    } catch (erro) {
        console.error('Houve um erro ao ler o JSON de contatos', erro);
        return dataContatos = []
    };
}

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

router.get('/', (req, res) => {
    res.status(200).send(exibirContatos())
});

router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    if (lerContatosID(id) === true) {

        const exibirContato = exibirContatos();
        const contato = exibirContato.find(p => p.id === id);
        res.status(200).send(contato)
    } else {
        res.status(200).send("Não existe um contato com esse ID")
    }

})

router.options("/", (req, res) => {
    res.header('Allow', 'GET');
    res.status(204).send();
})


router.options("/:id", (req, res) => {
    res.header('Allow', 'POST', 'DELETE');
    res.status(204).send();
})


export default router;