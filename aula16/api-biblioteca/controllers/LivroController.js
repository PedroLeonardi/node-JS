import { listarLivros, obterLivroPorId, criarLivro, atualizarLivro, excluirLivro } from "../models/Livro.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const criarLivroController = async (req, res) => {
    try {
        const { titulo, descricao, isbn } = req.body;
        let capaPath = null;
        if (req.file) {
            capaPath = req.file.path.replace(__filename.replace('\\controlers', ''), '');
        };
        const livroData = {
            titulo: titulo,
            descricao: descricao,
            isbn: isbn,
            capa: capaPath
        };
        const livroId = await criarLivro(livroData)
        res.status(201).json({ mensagem: 'Livro criado com sucesso!!!', livroId });
    } catch (err) {
        console.error('Erro ao criar livro: ', err)
        res.status(500).json({ mensagem: 'Erro ao criar livro' });
    }
}

const atualizarLivroController = async (req, res) => {
    try {
        const livroId = req.params.id;
        const { titulo, descricao, isbn } = req.body;
        let capaPath = null;
        if (req.file) {
            capaPath = req.file.path.replace(__filename.replace('\\controlers', ''), '');
        };
        const livroData = {
            titulo: titulo,
            descricao: descricao,
            isbn: isbn,
            capa: capaPath
        };
        await atualizarLivro(livroId, livroData)
        res.status(201).json({ mensagem: 'Livro ataulizado com sucesso!!!' });
    } catch (err) {
        console.error('Erro ao atualizar livro: ', err)
        res.status(500).json({ mensagem: 'Erro ao atualizar livro' });
    }
}

const excluirLivroController = async (req, res) => {
    try {
        const livroId = req.params.id;
        await excluirLivro(livroId);
        res.status(200).json({ mensagem: 'Livro excluido com sucesso' });
    } catch (err) {
        console.error('Erro ao excluir livro: ', err);
        res.status(500).json({ mensagem: 'Erro ao excluir livro' });
    };
}

export { listarLivrosController, obterLivroPorIdController, criarLivroController, atualizarLivroController, excluirLivroController } 