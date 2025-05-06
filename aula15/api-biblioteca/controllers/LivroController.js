import { listarLivros, obterLivroPorId } from "../models/Livro.js";

const listarLivrosController = async (req, res) => {
    try {
        const livros = await listarLivros();
        res.status(200).json(livros);
    } catch (err) {
        console.error("Erro ao listar livros: ", err);
        res.status(400).json({ menssage: "Houve um erro ao listar os Livros" });
        console.error(err);
    };   
};
const obterLivroPorIdController = async (req, res) => {
    try {
        const livros = await obterLivroPorId(req.params.id)
        if (livros) {
            res.status(200).json(livros)
        } else {
            res.status(404).json({ message: "Livro não encontrado" })
        }
    } catch (err) {
        console.error("Houve um erro ao obter livro por id: ", err)
        res.status(400).json({ message: "Houve um erro a exibir um livro pelo id" })

    }
};

export { listarLivrosController, obterLivroPorIdController } 