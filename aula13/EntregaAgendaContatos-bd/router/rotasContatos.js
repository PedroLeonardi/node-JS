import express from 'express';
import fs from 'fs'
import db from '../db.js'
const router = express.Router();

router.use(express.json());

const logger = (req, res, next) => {
    const data = new Date();
    const dataLOG = `[${data.toISOString()}] ${req.method} ${req.originalUrl}`
    console.log(dataLOG)
    fs.appendFileSync('teste.txt', `\n${dataLOG}`)
    next();
}
router.use(logger)

router.get("/", async (req,res)=>{
    try {
        const [row] = await db.query ('SELECT *FROM cliente')
        res.status(200).json(row)
    } catch (err) {
        console.error(err)
        res.status(500).send("Houve um erro ao exibir")
    }
})

router.get("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        const [row] = await db.query ("SELECT *FROM cliente WHERE id = ?", [id])
        if (row.length > 0) {
            res.status(200).json(row)
        } else {
            res.status(404).send("produto não encontrado")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Houve um erro exibir o contato com id",id)
    }
} ) 


export default router;