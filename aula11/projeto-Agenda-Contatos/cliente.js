import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";

const URL_API = "http://localhost:3000";

async function listarProdutos() {
    try {
        const listaProdutos = await axios.get(`${URL_API}/contatos`);
        return listaProdutos.data
    } catch (error) {
        console.error(chalk.red.underline("Houve um erro ao listar os produtos"),error.message)
        return [];
    }
}

async function detalhesProdutos (id){
    try {
    const destalhesProduto = await axios.get(`${URL_API}/contatos/${id}`)
    return destalhesProduto.data;
}catch (error) {
    console.error("Houve um erro ao exibir o Detalhe dos Contatos", error.message)
    return [];
    }
}

async function adicionarContato() {
    try {
    const adicionaContato = await axios.get(`${URL_API}/contatos/envio`)
    return adicionaContato.data
} catch (error){
    console.error("Houve um erro ao tentar adionar o contato", error.message);
    return [];
}
}

async function exibirMenu() {
    const perguntas = [
        {
            type: 'list',
            name: 'opcao',
            message: 'Escolha uma Ação',
            choices: [
                {name: chalk.green('Listar Contatos'), value: "listar"},
                {name: chalk.green('Detalhes Contato'), value: "detalhes"},
                {name: chalk.green('Adicionar um novo Contato'), value: "adicionar"},
                {name: chalk.green('Sair'), value: "sair"},
            ]
        }
    ]
    


try {
    const resposta = await inquirer.prompt(perguntas);

    switch(resposta.opcao){

        case 'listar':
            const produtos = await listarProdutos();
            console.log(produtos)

            break;
        case 'detalhes':

            const idResposta = await inquirer.prompt([
                {type: 'input', name: 'id', message: 'Digite o ID: '}
            ])

            const detalheProduto = await detalhesProdutos(idResposta.id);
            console.log(detalheProduto)
            break;
        case 'adicionar':

            const novoContato = await inquirer.prompt([
                { type: 'input', message: "insira o ID: ", name: 'id'},
                { type: 'input', message: 'Insira o Nome: ', name: 'nome'}
            ])
            
            const teste = {teste:'teste3'}

            const dataAdicionarContato = await {
                id: novoContato.id,
                nome: novoContato.nome
            }

            axios.post(`${URL_API}/contatos/envio`, dataAdicionarContato)
            .then(response=>{
                console.log('Novo ToDos: ', response.data)
            })
            .catch(error=>{
                console.error('Ocorreu um erro', error)
            })

            
    }

} catch (error) {
    console.error("Houve um erro ao executar o Prompt de Perguntas", error.message)
}






}
exibirMenu();

listarProdutos();