import express from "express";
const app = express();
const port = 3000;
import rotaCliente from "./router/rotasCliente.js"
import rotaProdutos from "./router/rotasProdutos.js"

app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("Pagina Inical");
});



app.use("/cliente", rotaCliente)
//--------------------------------------------------
app.use("/produtos", rotaProdutos)

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});