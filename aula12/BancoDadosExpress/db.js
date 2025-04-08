import mysql from "mysql2";

const pool = mysql.createPool({
    host:"localhost", // onde ele esta
    user:"root", //usuario
    password:"", //senha
    database:"p_loja", //nome database
    waitForConnections: true, // se essa rota espera por conexao
    connectionLimit:10, // quantas pessoas podem estar conectadas ao mesmo tempo ao db
    queueLimit: 0 // quantas pessoas pode esperar para acessar a conexao 
})

export default pool.promise();

// node --watch app.js ATUALIZA O SERVER AUTIMATICO SEM QUE QUE DELIGAR E LIGA