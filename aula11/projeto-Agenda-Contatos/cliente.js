import axios from "axios";
import chalk from "chalk";
import { response } from "express";
import inquirer from "inquirer";

const URL_API = "http://localhost:3000";


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

async function adicionarContato(data) {

    axios.post(`${URL_API}/contatos/envio`, data)
        .then(response => {
            console.log('Novo Contato Adicionado: ', response.data)
        })
        .catch(error => {
            console.error('Ocorreu um erro ao adicionar um contato', error)
        })
}

async function deletarContato(id) {
    try {
        const respostaDelete = await axios.delete(`${URL_API}/contatos/${id}`) // TEM QU SER DELETE EM FASE DE TESTE
        return respostaDelete.data;
    } catch (err) {
        console.error('Houve um erro ao deletar um contato',err)
        return [];
    }
}

async function atualizarContato(id) {

        const teste1 = {
            body:{
                nome:'pedro'
            }
        }

        axios.patch(`${URL_API}/contatos/${id}`, teste1)
        .then(response =>{
            console.log(response.data)
        })
        .catch (err =>{
            console.error("Houve um erro ao acessar a rota Atualizar", err.message)
        }) 
}






async function exibirMenu() {
    try {
        const perguntas = [
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
        
        
        
        try {
            const resposta = await inquirer.prompt(perguntas);
            
            switch (resposta.opcao) {
                
                case 'listar':
                    const produtos = await listarProdutos();
                    console.log(produtos)
                    
                    break;
                    case 'detalhes':
                        
                        const idResposta = await inquirer.prompt([
                            { type: 'input', name: 'id', message: 'Digite o ID: ' }
                        ])
                        
                        const detalheProduto = await detalhesProdutos(idResposta.id);
                        console.log(detalheProduto)
                        break;
                        case 'adicionar': //AQUI TEM QUE ARRUMAR !!!!!!!!!
                        
                        const novoContato = await inquirer.prompt([
                            { type: 'input', message: "insira o ID: ", name: 'id' },
                            { type: 'input', message: 'Insira o Nome: ', name: 'nome' }
                        ])
                        
                        
                        const dataAdicionarContato = await {
                    id: novoContato.id,
                    nome: novoContato.nome
                }
                
                
                adicionarContato(dataAdicionarContato)
                
                break;
                
                case 'atualizar':
                    
                atualizarContato(1)
                    
                    break;
                    case 'excluir':
                const idResposta2 = await inquirer.prompt([
                    { type: 'input', name: 'id', message: 'Qual Produto vc deseja Excluir: ' }
                ])
                
                const detalheProdutoa = await deletarContato(idResposta2.id);
                console.log(detalheProdutoa)
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