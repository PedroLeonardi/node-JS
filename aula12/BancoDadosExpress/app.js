import express from "express";
const app = express();
const port = 3000;
import db from "./db.js"

app.get("/", (req,res)=>{
    res.status(200).send("Pagina Inical");
});

app.get("/cliente", async (req,res)=>{
    try{
        const [rows] = await db.query('SELECT *FROM cliente'); // [rows] ESTA ENTRE CHAVES PQ É UM ARRAY
        res.JSON(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send ("Erro ao obter clientes");
    }
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});