import express, { Router } from "express";
import fs from "fs";
import rotasBase from "./rotasContatos.js"
import { Console } from "console";
const router = express.Router();
const app = express();

const autenticar = (req, res, next) => {
  const token = req.headers['authorization']
  console.log (token)
  if (token === 'SEGREDO') {
      // router.send('Usuario autenticado como admin') ESSE AQUI QNÃO TEM NECESSIDADE 
      next()
  } else {
          res.status(401).send('<h1 style="color: red;">ERRO 401</h1><br><p style="font-weight:bold;">Sem autorização</p>')
  }
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


async function atualizarContato(id, key, value){
    try{

        const AllData = fs.readFileSync('./data/contatos.json', 'utf8');
        const allDataJson = JSON.parse(AllData);
        const dataAtualizada = allDataJson.find( p => p.id === id);
        dataAtualizada[key] = value
        fs.writeFileSync('./data/contatos.json', JSON.stringify(allDataJson, null, 2))
    }catch(err){
        console.error("Houve um erro ao ler e ataulizar o JSON de contatos", err.message)
    }
}

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", autenticar, (req, res)=>{
  res.status(200).send("Acesso concedido")
      
})


router.post('/envio', autenticar,(req,res)=>{
    const novoItem = req.body
    console.log("Produto enviado com Sucesso", novoItem);
    try {
        salvarDados(novoItem)
        res.status(200).send("Produto enviado com Sucesso")
    } catch (error) {
        res.status(400).send("Houve um erro ao efetuar o salvamento", error.message) //OU É 400 OU 500
        
    }
})


router.patch('/:id', autenticar,(req, res)=>{ 
    try{
        const id = parseInt(req.params.id)
        const newData = JSON.stringify(req.body, null, 2)
        const newDataJSON = JSON.parse(newData)
        const key = newDataJSON.key
        const value = newDataJSON.value
        console.log(newData)
        atualizarContato(id, key, value);
    } catch (err) {
        console.error('erro ao tentar executar a ação', err)
    }
})



router.delete('/:id', autenticar,(req,res)=>{ /////TEM QUE SER DELETE SOMENTE TESTE
    const id = parseInt(req.params.id)

    
        deletarDados(id);
        res.status(200).send(`deletado com sucesso`)

})










// colocar password em todas as rotas cliente


export default router;