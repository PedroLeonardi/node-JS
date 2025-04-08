import mysql from 'mysql2'; //importa o modulo

const connetction = mysql.createConnection({ //cria a conexao com os dados do db
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'p_loja'
})

connetction.connect((err)=>{ //efetua a conexão com o db
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ',err);
        return
    }
    console.log("A conecxão estabelecida com sucesso!!!")
})

export default connetction //exporta 