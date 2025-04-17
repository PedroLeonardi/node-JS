import express from "express";
import fs from "fs";
import rotasContatos from "./rotasContatos.js"
import db from "../db.js"
const router = express.Router();

router.use(rotasContatos)

const logger = (req, res, next) => {
    const data = new Date();
    const dataLOG = `[${data.toISOString()}] ${req.method} ${req.originalUrl}`
    console.log(dataLOG)
    fs.appendFileSync('teste.txt', dataLOG)
    console.log(dataLOG)
    next();
};


const autenticar = (req, res, next) => {
    const token = req.headers['authorization']
    if (token === 'SEGREDO') {
        next()
    } else {
        res.status(401).send('Sem autorização')
    }
}


router.use(logger);
router.use(express.json());


router.get("/verificacao", autenticar, (req, res) => {
    res.status(200).send("aopa")

})


router.post('/', async (req, res) => {
    const {nome, idade, email} = req.body
        try {
            const [result] = await db.query("INSERT INTO cliente (nome, idade, email) VALUES (?,?,?)", [nome, idade, email])
            res.status(201).send("item adicionado com sucesso")
        } catch (err) {
            console.error(err)
            res.status(500).send("Houve um erro ao adicionar")
        }


})

router.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const {key, value} = req.body
    if (key === "nome", "idade", "email") {

        
        try {
            const [result] = await db.query(`UPDATE cliente SET ${key} = ? WHERE id = ?`, [value, id])
            if (result.affectedRows > 0){
                res.status(201).send(`Dado ataulizado com sucesso, linha afestadas ${result.affectedRows}`)
            }   else {
                res.send("Não encontrou um contato com esse ID")
            }
        } catch (err) {
            console.error(err)
            res.status(500).send(`Houve um erro ao ataulizar um contato com o id: ${id}`)
        }
    } else {
        res.status(500).send("Não foi possivel realizar a mudança")
    }

})


router.delete('/:id', async (req, res) => {
    
    const {id} = req.params;

    try {
        const [result] = await db.query("DELETE FROM cliente WHERE id = ?", [id])
        if (result.affectedRows > 0 ){
            res.status(201).send("Ciente excluido com sucesso!!!")
        } else {
            res.status(404).send("Cliente não encontrado")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Erro ao exluir cliente")
    }

})


export default router;