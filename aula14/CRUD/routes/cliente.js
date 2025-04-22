import express from "express";
import db from "../bd.js"
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const clientes = await db.readAll('clientes')
        res.status(200).json(clientes)
    } catch (err) {
        console.error("Erro ao listar clientes: ", err)
        res.status(500).json({ error: 'Erro ao listar clientes' })
    }
});


router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const clienteUnitario = await db.read("clientes", `id = ${id}`)
        if (clienteUnitario) {
            res.status(200).json(clienteUnitario)
        } else {
            res.status(404).json({ message: "cliente não encontrado" })
        }
    } catch (err) {
        console.error("Erro ao ler um Cliente", err)
        res.status(500).json({ err: "Houve um erro ao exibir um cliente" })
    }
})

router.post("/", async (req, res) => {
    try {
        const result = await db.create("clientes", req.body)
        if (result) {
            res.status(200).json({ id: result, message: `cliente criado com sucesso com o id: ${result}` })
        } else {
            res.status(500).send("Houve um erro ao acessar o servico de banco de dados")
        }
    } catch (err) {
        console.error("Houve um erro ao criar um cliente: ", err)
        res.status(500).json({ err: "Erro ao adicionar cliente" })
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.update("clientes", req.body, `id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ message: `Produto atualizado com sucesso, itens alterados : ${affectedRows}` })
        } else {
            res.status(404).json({ message: "Não existe um item com esse id" })
        }
    } catch (err) {
        console.error("Erro ao ataulizar o contato: ", err)
        res.status(500).json({ error: "Erro ao ataulizar o contato" })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const affectedRows = await db.delete("clientes", `id = ${id}`)
        if (affectedRows > 0) {
            res.status(200).json({ itensDeletado: affectedRows, messagem: "item deletado com sucesso" })
        } else {
            res.status(404).json({ message: "Não existe um cliente com esse id" })
        }

    } catch (err) {
        console.error("Erro ao deletar: ", err)
        res.status(500).send("Erro ao deletar um contato")
    }
})

export default router;