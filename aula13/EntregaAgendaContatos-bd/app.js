import express from "express";
import rotasContatos from "./router/rotasContatos.js"
import rotasAdmin from "./router/rotasAdmin.js"
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send("Pagina inical de contatos")
})

app.use("/contatos", rotasContatos);
app.use("/admin", rotasAdmin)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});