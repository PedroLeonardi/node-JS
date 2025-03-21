import express from "express";
import rotaContatos from "./router/rotasContatos.js"
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.status(200).send("Pagina inical de contatos")
})

app.use("/contatos", rotaContatos);


app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});