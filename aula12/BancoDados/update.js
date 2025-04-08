import db from "./conexao.js";

const clienteAtualizado = {
    nome: "João",
    email: "joao@email"
};

db.query('UPDATE cliente SET ? WHERE ID = ?', [clienteAtualizado, 5], (err, result)=>{ // A INTERROGAÇÃO SERVE PARA INDICAR OS CAMPOS A SEREM ENVIADOS, O ARRAY SÃO OS CAMPOS (SE MAIS DE 1)
    if (err){
        console.error("Houve um erro ao ataulizar o cliente: ", err)
    }
    console.log("Cliente ataulizado com sucesso!!! linhas afestadas", result.affectedRows);

    db.end();
})