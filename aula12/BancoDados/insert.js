import db from "./conexao.js";

const novoCliente = { // Estrutura dos dados
    nome: "amanda",
    email: "amanda@email",
    endereco: "Rua boa vista, 852"
};

db.query('INSERT INTO cliente SET ?', novoCliente, (err ,results)=>{    //SET ? "INTERREGAOÇÃO" É PARA RECEBER UM CONJUNTO DE INFORMAÇÕES
    if (err) {
        console.error('Erro ao inserir dados', err);
        return;
    }
    console.log('Dados inseridos com sucesso!!! ID do novo Cliente', results.insertId); // results.insertId RETORNA AO USUARIO O ID 
db.end();
}) 

//SE DER ALGUM ERRO O VALOR DO ID SERÁ RESERVADO POREM FICARA VAZIO, ASSIM PULANDO UM ID ALETAROIO, ISSO SIGINIFICA UM ERRO 

