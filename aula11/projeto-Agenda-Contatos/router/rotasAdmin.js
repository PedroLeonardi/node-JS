import express from "express";
import fs from "fs";
import rotasBase from "./rotasContatos.js"
import { Console } from "console";
const router = express.Router();

const autenticar = (req, res, next) =>{
    // Simulação de autenticação: NUNCA usar em produção!!!
    const token = req.headers['authorization'];
    console.log(req)
    if (token === 'SEGREDO'){
      next() //autenticado
    } else {
        res.status(401).send('Não Autorizado');
    };
};


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/", autenticar , rotasBase);












export default router;