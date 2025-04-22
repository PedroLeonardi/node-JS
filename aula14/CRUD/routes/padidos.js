import express from "express";
import db from "../bd.js"
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const pedidos = await db.readAll('pedidos')
        res.status(200).json(pedidos)
    } catch (err) {
        console.error("Erro ao listar pedidos: ", err)
        res.status(500).json({ error: 'Erro ao listar pedidos' })
    }
});


router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const pedidoUnitario = await db.read("pedidos", `pedido_id = ${id}`)
        if (pedidoUnitario) {
            res.status(200).json(pedidoUnitario)
        } else {
            res.status(404).json({ message: "pedido não encontrado" })
        }
    } catch (err) {
        console.error("Erro ao ler um pedido", err)
        res.status(500).json({ err: "Houve um erro ao exibir um pedido" })
    }
})

router.post("/", async (req, res) => {
    try {
        const result = await db.create("pedidos", req.body)
        if (result) {
            res.status(200).json({ id: result, message: `pedido criado com sucesso com o id: ${result}` })
        } else {
            res.status(500).send("Houve um erro ao acessar o servico de banco de dados")
        }
    } catch (err) {
        console.error("Houve um erro ao criar um pedido: ", err)
        res.status(500).json({ err: "Erro ao adicionar pedido" })
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.update("pedidos", req.body, `pedido_id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ message: `Produto atualizado com sucesso, itens alterados : ${affectedRows}` })
        } else {
            res.status(404).json({ message: "Não existe um item com esse id" })
        }
    } catch (err) {
        console.error("Erro ao ataulizar o pedido: ", err)
        res.status(500).json({ error: "Erro ao ataulizar o pedido" })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.delete("pedidos", `pedido_id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ itensDeletado: affectedRows, messagem: "item deletado com sucesso" })
        } else {
            res.status(404).json({ message: "Não existe um pedido com esse id" })
        }

    } catch (err) {
        console.error("Erro ao deletar: ", err)
        res.status(500).send("Erro ao deletar um pedido")
    }
})

export default router;