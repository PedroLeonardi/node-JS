const express = require('express');
const router = express.Router();

const autentificar = (req, res, next)=>{
    const token = req.headers['authorization'];
    if (token === 'SEGREDO') {
        next()
    } else {
        res.status(401).send('Acesso Negado');
    };
};
router.get('/', autentificar, (req,res)=>{
    res.status(200).send('Lista Admnistrativa')
});

module.exports = router