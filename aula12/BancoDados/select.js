import db from "./conexao.js"; // importa a conexao


db.query('select *from pedidos', (err, results, fields)=>{ //query acessa a conexao, e a stirng é o comando a ser executado
    if (err) {
        console.error("Houve um erro o executar a consulta", err);
        return;
    }
    console.log("Resultados: ", results); // results traz os resultados "LINHAS"
    console.log("Campos", fields); //traz o nome das colunas e seus atributos
})

db.end((err)=>{ // é necessario FINALZIZAR A CONEXAO, senão ocupa uma linha de acesso mesmo sem fazer nada
    if (err) {

        console.log("Erro ao encerrar a conexão", err);
        return;
    };

    setTimeout(()=>{ // SETTIME OUT atrasassr a exibição 

        console.log("Conexão encerrada com sucesso");
    },100)
});