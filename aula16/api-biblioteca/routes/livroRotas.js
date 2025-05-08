import express from "express";
import { listarLivrosController, obterLivroPorIdController, criarLivroController, atualizarLivroController, excluirLivroController } from "../controllers/LivroController.js";
import authMiddlewre from "../middlewares/authMiddlewere.js";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from "url";

const router = express.Router(); // ----------------------- Inicio preparação salvar diretorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,path.join(__dirname, '../uploads/'));
    }, 
    filename: (req, file, cb) => {
        const nomeArquivo = `${Date.now()}-${file.originalname}`;
        cb(null, nomeArquivo)
    }
});// ----------------------- Fim preparação salvar diretorio

const upload = multer({storage: storage})

router.get("/", listarLivrosController);
router.post('/', authMiddlewre, upload.single('capa'), criarLivroController);
router.get("/:id", obterLivroPorIdController);
router.put('/:id', authMiddlewre, upload.single('capa'), atualizarLivroController );
router.delete('/:id', authMiddlewre, excluirLivroController);


router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.status(204).send();
})

router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, PUT, DELETE, OPTIONS');
    res.status(204).send();
})


export default router;