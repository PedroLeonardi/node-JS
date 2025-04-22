import express from "express";
import db from "../bd.js"
const router = express.Router();

router.use (express.json());

router.get("/", async (req, res) => {
    try {
        const produtos = await db.readAll('produtos')
        res.status(200).json(produtos)
    } catch (err) {
        console.error("Erro ao listar produtos: ", err)
        res.status(500).json({ error: 'Erro ao listar produtos' })
    }
});


router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const produtosUnitario = await db.read("produtos", `id = ${id}`)
        if (produtosUnitario) {
            res.status(200).json(produtosUnitario)
        } else {
            res.status(404).json({ message: "produtos não encontrado" })
        }
    } catch (err) {
        console.error("Erro ao ler um produtos", err)
        res.status(500).json({ err: "Houve um erro ao exibir um produtos" })
    }
})

router.post("/", async (req, res) => {
    try {
        const result = await db.create("produtos", req.body)
        if (result) {
            res.status(200).json({ id: result, message: `produtos criado com sucesso com o id: ${result}` })
        } else {
            res.status(500).send("Houve um erro ao acessar o servico de banco de dados")
        }
    } catch (err) {
        console.error("Houve um erro ao criar um produtos: ", err)
        res.status(500).json({ err: "Erro ao adicionar produtos" })
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.update("produtos", req.body, `id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ message: `Produto atualizado com sucesso, itens alterados : ${affectedRows}` })
        } else {
            res.status(404).json({ message: "Não existe um item com esse id" })
        }
    } catch (err) {
        console.error("Erro ao ataulizar o produto: ", err)
        res.status(500).json({ error: "Erro ao ataulizar o produto" })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.delete("produtos", `id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ itensDeletado: affectedRows, messagem: "item deletado com sucesso" })
        } else {
            res.status(404).json({ message: "Não existe um produto com esse id" })
        }

    } catch (err) {
        console.error("Erro ao deletar: ", err)
        res.status(500).send("Erro ao deletar um produto")
    }
})

export default router;