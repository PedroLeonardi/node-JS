import express from "express";
import db from "../db.js"
const router = express.Router()
router.use(express.json());

//--------------------------------------------------

router.get("/", async (req,res)=>{ //É async PQ É PROMISSES 
    try{
        const [rows] = await db.query('SELECT *FROM produtos'); // [rows] ESTA ENTRE CHAVES PQ É UM ARRAY
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send ("Erro ao obter Produtos");
    }
})

//--------------------------------------------------

router.get("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        const [row] = await db.query('SELECT *FROM produtos WHERE id = ?', [id]); // É OBRIGATORIO O COLCHETES PQ É UM ARRAY "EM TEORIA"
        if (row.length > 0) {
            res.status(200).json(row)
        } else {
            res.status(404).send("produto não encontrado")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Houve um erro ao acessar um produtos especifico")
    }
})

//--------------------------------------------------

router.post("/", async (req,res)=>{//É async PQ É PROMISSES 
    const {id, nome, descricao, preco} = req.body; //VAI PEGAR DO REQ BODY E O PRIMERIO ITEM VIRA NOME, SEGUNDO descricao, TERCEIRO preco
    try {
        const[result] = await db.query('INSERT INTO produtos (id, nome, descricao, preco) VALUES (?, ?, ? ,?)', [id, nome, descricao, preco]);
        res.status(201).json({id: result.insertId, nome, descricao, preco}) //
    } catch (err) {
        console.error(err)
        res.status(500).send("Erro ao inserir dados na tabrla produtos");
    };
});

//--------------------------------------------------

router.put("/:id", async (req,res)=>{
    const {id} = req.params;
    const {nome, descricao, preco} = req.body;
    try {
        const [result] = await db.query("UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?", [nome, descricao, preco , id]);
        if (result.affectedRows>0){
            res.status(200).json({id, nome, descricao, preco});
        } else {
            res.status(404).send("Não localizou o item com o id", id);
        } 
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao atualizar produtos");
    }
})

//--------------------------------------------------.

router.delete("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        const [result] = await db.query("DELETE FROM produtos WHERE id = ?", [id])
        if (result.affectedRows > 0 ){
            res.status(201).send("Produtos excluido com sucesso!!!")
        } else {
            res.status(404).send("produtos não encontrado")
        }
    } catch (err) {
        console.error(err)
        res.status(500).send("Erro ao exluir produtos")
    }
})



export default router;