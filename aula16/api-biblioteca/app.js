import express from 'express';
import livroRotas from "./routes/livroRotas.js";
import authRotas from './routes/authRotas.js';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.json());

app.use("/livros", livroRotas)
app.use('/auth', authRotas)

app.get('/', (req, res) => {
    res.status(200).send("API de Biblioteca")
});


app.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS')
    res.status(204).send();
})

app.use((req, res) => {
    res.status(200).json({ message: "Pagina não econtrada" })
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost/${port}`)
});