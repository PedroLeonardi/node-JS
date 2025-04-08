import db from "./conexao.js";

db.query("DELETE FROM cliente where id = ?", 5, (err, result)=>{
    if (err){
        console.error("Houve um erro ao delatar um contato", err )
        return;
    }

    setTimeout(()=>{

        console.log ("Dados Excluidos com sucesso!!! Linhas afetadas", result.affectedRows)
    },100)

    db.end();
})