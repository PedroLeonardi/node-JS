import mysql from "mysql2"

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database: 'p_contatos_end',
    waitForConnections: true,
    connectionLimit:10, 
    queueLimit: 0 
})

export default pool.promise();