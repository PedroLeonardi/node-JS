import express from 'express';
import livroRotas from "./routes/livroRotas.js"
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("API de Biblioteca")
});

app.use("/livros", livroRotas)


app.options('/', (req,res)=>{
    res.setHeader('Allow', 'GET, OPTIONS')
    res.status(204).send();
})

app.use((req, res) => {
    res.status(200).json({ message: "Pagina não econtrada" })
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost/${port}`)
});