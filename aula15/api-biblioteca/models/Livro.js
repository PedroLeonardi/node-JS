import { readAll, read } from '../config/database.js';
const listarLivros = async () => {

    try {
        return await readAll('livros');
    } catch (err) {
        console.error("Houve um erro a listar todos os Livros: ", err);
        throw err;
    }
};

const obterLivroPorId = async (id) => {
    try {
        return await read('livros', `id = ${id}`);
    } catch (err) {
        console.error("Erro ao procurar um livro: ", err);
        throw err;
    };
};

export { listarLivros, obterLivroPorId };