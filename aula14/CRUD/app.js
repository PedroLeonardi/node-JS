import express from "express";
import rotaClientes from "./routes/cliente.js"
import rotaProdutos from "./routes/produtos.js"
const app = express();
const port = 3000


app.get("/", (req,res)=>{
    res.status(200).send("Página inical");
})

app.use("/clientes", rotaClientes);
app.use("/produtos", rotaProdutos);

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})