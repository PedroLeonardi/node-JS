import express from "express";
import db from "../db.js"
const router = express.Router()
router.use(express.json());

//--------------------------------------------------

router.get("/", async (req,res)=>{ //É async PQ É PROMISSES 
    try{
        const [rows] = await db.query('SELECT *FROM cliente'); // [rows] ESTA ENTRE CHAVES PQ É UM ARRAY
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send ("Erro ao obter clientes");
    }
})

//--------------------------------------------------

router.get("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        const [row] = await db.query('SELECT *FROM cliente WHERE id = ?', [id]); // É OBRIGATORIO O COLCHETES PQ É UM ARRAY "EM TEORIA"
        if (row.length > 0) {
            res.status(200).json(row)
        } else {
            res.status(404).send("produto não encontrado")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Houve um erro ao acessar um cliente especifico")
    }
})

//--------------------------------------------------

router.post("/", async (req,res)=>{//É async PQ É PROMISSES 
    const {nome, email, endereco} = req.body; //VAI PEGAR DO REQ BODY E O PRIMERIO ITEM VIRA NOME, SEGUNDO EMAIL, TERCEIRO ENDERECO
    try {
        const[result] = await db.query('INSERT INTO cliente (nome, email, endereco) VALUES (?, ? ,?)', [nome, email, endereco]);
        res.status(201).json({id: result.insertId, nome, email, endereco}) //
    } catch (err) {
        console.error(err)
        res.status(500).send("Erro ao inserir dados na tabrla cliente");
    };
});

//--------------------------------------------------

router.put("/:id", async (req,res)=>{
    const {id} = req.params;
    const {nome, email, endereco} = req.body;
    try {
        const [result] = await db.query("UPDATE cliente SET nome = ?, email = ?, endereco = ? WHERE id = ?", [nome, email, endereco , id]);
        if (result.affectedRows>0){
            res.status(200).json({id, nome, email, endereco});
        } else {
            res.status(404).send("Não localizou o item com o id", id);
        } 
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao atualizar cliente");
    }
})

//--------------------------------------------------.

router.delete("/:id", async (req,res)=>{
    const {id} = req.params
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