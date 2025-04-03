import axios from "axios";
// import express from "express";
import chalk from "chalk";
import { response } from "express";
import inquirer from "inquirer";

// const app = express();

const URL_API = "http://localhost:3000";

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function listarProdutos() {
    try {
        const listaProdutos = await axios.get(`${URL_API}/contatos`);
        return listaProdutos.data
    } catch (error) {
        console.error(chalk.red.underline("Houve um erro ao listar os produtos"), error.message)
        return [];
    }
}

async function detalhesProdutos(id) {
    try {
        const destalhesProduto = await axios.get(`${URL_API}/contatos/${id}`)
        return destalhesProduto.data;
    } catch (error) {
        console.error("Houve um erro ao exibir o Detalhe dos Contatos", error.message)
        return [];
    }
}

async function adicionarContato(data, password) {
    const token = {
        headers:{
            'authorization': password
        }   
    }
    axios.post(`${URL_API}/admin/envio`, data, token)
        .then(response => {
            console.log('Novo Contato Adicionado: ', response.data)
        })
        .catch(error => {
            console.error('Ocorreu um erro ao adicionar um contato', error.data)
        })
}

async function deletarContato(id, password) {
    const token = {
        headers:{
            'authorization': password
        }   
    }
    try {
        const respostaDelete = await axios.delete(`${URL_API}/admin/${id}`, token) // TEM QU SER DELETE EM FASE DE TESTE
        return respostaDelete.data;
    } catch (err) {
        console.error(err.message)
        // return [];
    }
}

async function atualizarContato(id, data, password) {

    const token = {
        headers:{
            'authorization': password
        }   
    }

    axios.patch(`${URL_API}/admin/${id}`, data, token)
        .then(response => {
            console.log(response.data) 
        })
        .catch(err => {
            
            console.error(err.response.data)
        })
}

async function entrarAdmin(password) {

    const token = {
        headers:{
            'authorization': password
        }   
    }

    try {
        const guiaAdmin = await axios.get(`${URL_API}/admin` , token )
        //console.log(guiaAdmin.data)// ------ ERRO por conta desse response
    } catch (err) {
        console.error("Houve um erro ao tentar acessar a rota admin", err.message)
    }
    
}






async function exibirMenu() {
    try {

        const perguntasBase = [
            {
                type: 'list',
                name: 'opcao',
                message: 'Escolha uma Ação',
                choices: [
                    { name: chalk.green('Listar Contatos'), value: "listar" },
                    { name: chalk.green('Detalhes Contato'), value: "detalhes" },
                    { name: chalk.green('Entrar como Administrador'), value: "admin" },
                    { name: chalk.green('Sair'), value: "sair" },
                ]
            }
        ]



        try {
            const resposta = await inquirer.prompt(perguntasBase);

            switch (resposta.opcao) {

                case 'listar':
                    const produtos = await listarProdutos();
                    console.log(produtos)
                    exibirMenu()
                    break;
                case 'detalhes':

                    const idResposta = await inquirer.prompt([
                        { type: 'input', name: 'id', message: 'Digite o ID: ' }
                    ])

                    const detalheProduto = await detalhesProdutos(idResposta.id);
                    console.log(detalheProduto)
                    exibirMenu()
                    break;
                

                case 'admin':

                    const senha = await inquirer.prompt([
                        { type: 'input', name: 'senha', message: 'Qual é a senha: ' }
                    ])

                    entrarAdmin(senha.senha)
                    if (senha.senha === "SEGREDO"){

                    
                        async function menuAdmin() {

                            const perguntasAdmin = [
                                {
                                    type: 'list',
                                    name: 'opcao',
                                    message: 'Escolha uma Ação',
                                    choices: [
                                        { name: chalk.green('Listar Contatos'), value: "listar" },
                                        { name: chalk.green('Detalhes Contato'), value: "detalhes" },
                                        { name: chalk.green('Adicionar um novo Contato'), value: "adicionar" },
                                        { name: chalk.green('Atualizar um Contato'), value: "atualizar" },
                                        { name: chalk.green('Excluir um Contato'), value: "excluir" },
                                        { name: chalk.green('Sair'), value: "sair" },
                                    ]
                                }
                            ]

                            const respostaB = await inquirer.prompt(perguntasAdmin)
                                switch(respostaB.opcao){

                                    
                                    case 'listar':
                                        const produtos = await listarProdutos();
                                        console.log(produtos)
                                        menuAdmin();
                    
                                        break;
                                    case 'detalhes':
                    
                                        const idResposta = await inquirer.prompt([
                                            { type: 'input', name: 'id', message: 'Digite o ID: ' }
                                        ])
                    
                                        const detalheProduto = await detalhesProdutos(idResposta.id);
                                        console.log(detalheProduto)
                                        menuAdmin();
                                        break;
case 'adicionar': //AQUI TEM QUE ARRUMAR !!!!!!!!!

                    const novoContato = await inquirer.prompt([
                        { type: 'input', message: "insira o ID: ", name: 'id' },
                        { type: 'input', message: 'Insira o Nome: ', name: 'nome' }
                    ])


                    const dataAdicionarContato = await {
                        id: parseInt(novoContato.id),
                        nome: novoContato.nome
                    }


                    adicionarContato(dataAdicionarContato, senha.senha)
                    await timeout(1000)
                    menuAdmin()
                    break;

                case 'atualizar':

                    const atualizarContato2 = await inquirer.prompt([
                        {type: "input", message: "Qual é o id do item a ser alterado", name: "id"},
                        {type: 'list', message: 'Qual Campo vc deseja alterar?', choices:['nome','idade'], name:"tipo"},
                        {type: 'input', message: 'Inisira o novo campo', name:"resposta" }

                    ])
                    // const ataulizarContato = await inquirer.prompt({
                    //     {type: 'type', message: 'Qual Campo vc deseja alterar?', choices:['nome','idade'], name:"tipo"},
                    // })
                
                    const data = await {
                        key:atualizarContato2.tipo,
                        value:atualizarContato2.resposta
                    }

                    atualizarContato(atualizarContato2.id, data , senha.senha)
                    await timeout(1000)
                    menuAdmin();
                    break;
                case 'excluir':
                    const idResposta2 = await inquirer.prompt([
                        { type: 'input', name: 'id', message: 'Qual Produto vc deseja Excluir: ' }
                    ])

                    const detalheProdutoa = await deletarContato(idResposta2.id , senha.senha);
                    console.log(detalheProdutoa)
                    menuAdmin();
                    break;
                                    
                                }
                        }

                        menuAdmin();
                    } else {
                        console.log("senha incorreta")
                    }
                    break;
                    
                }

        } catch (error) {
            console.error("Houve um erro ao executar o Prompt de Perguntas", error.message)
        }

    } catch (error) {
        console.log('Houve um erro ao tentar executar o prompt de perguntas', error.message)
    }



}



exibirMenu();

listarProdutos();