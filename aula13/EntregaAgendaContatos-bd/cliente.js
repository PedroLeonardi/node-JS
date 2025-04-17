import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";

const URL_API = "http://localhost:3000";


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function listarProdutos() {
    try {
        const listaProdutos = await axios.get(`${URL_API}/contatos`);
        return listaProdutos.data
    } catch (error) {
        console.error(chalk.red.underline("Houve um erro ao listar os produtos"), error.message)
        return [];
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function detalhesProdutos(id) {
    try {
        const destalhesProduto = await axios.get(`${URL_API}/contatos/${id}`)
        return destalhesProduto.data;
    } catch (error) {
        console.error("Houve um erro ao exibir o Detalhe dos Contatos: ", error.response.data)
        return [];
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function entrarAdmin(password) {

    const token = {
        headers: {
            'authorization': password
        }
    }
    try {
        const guiaAdmin = await axios.get(`${URL_API}/admin/verificacao`, token)
        return guiaAdmin
    } catch (err) {
        console.error("Houve um erro ao tentar acessar a rota admin", err)
        return [];
    }

}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function adicionarContato(data, password) {

    axios.post(`${URL_API}/admin`, data/*, token*/)
        .then(response => {
            console.log('Status: ', response.data)
        })
        .catch(error => {
            console.error('Ocorreu um erro ao adicionar um contato', error.data)
        })
}

async function deletarContato(id, password) {
    const token = {
        headers: {
            'authorization': password
        }
    }
    try {
        const respostaDelete = await axios.delete(`${URL_API}/admin/${id}`, token)
        return respostaDelete.data;
    } catch (err) {
        return err.response.data;
    }
}

async function atualizarContato(id, data, password) {

    const token = {
        headers: {
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



async function exibirMenu() {
    try {

        const perguntasBase = [
            {
                type: 'list',
                name: 'opcao',
                message: chalk.blueBright.bold('Escolha uma Ação'),
                choices: [
                    { name: chalk.green('Listar Contatos'), value: "listar" },
                    { name: chalk.green('Detalhes Contato'), value: "detalhes" },
                    { name: chalk.magenta('Entrar como Administrador'), value: "admin" },
                    { name: chalk.green('Sair'), value: "sair" },
                ]
            }
        ]

        try {
            const resposta = await inquirer.prompt(perguntasBase);

            switch (resposta.opcao) {

                case 'listar':

                    const produtos = await listarProdutos();
                    produtos.forEach(Produto => {
                        console.log(chalk.cyanBright.bold("ID:"), chalk.yellowBright(`${Produto.id}`),
                            ' - ', chalk.cyanBright.bold("NOME:"), chalk.yellowBright(`${Produto.nome}`),
                            ' - ', chalk.cyanBright.bold("Idade:"), chalk.yellowBright(`${Produto.idade}`),
                            ' - ', chalk.cyanBright.bold("Emai:"), chalk.yellowBright(`${Produto.email}`))
                    })
                    exibirMenu()
                    break;
                case 'detalhes':

                    const idResposta = await inquirer.prompt([
                        { type: 'number', name: 'id', message: 'Digite o ID: ' }
                    ])

                    const detalheProduto = await detalhesProdutos(idResposta.id);
                    console.log(detalheProduto)
                    exibirMenu()
                    break;


                case 'admin':

                    const senha = await inquirer.prompt([
                        { type: 'input', name: 'senha', message: 'Qual é a senha: ' }
                    ])

                    entrarAdmin(senha.senha).then(result => {
                        
                    
                        
                        console.log(result)
                        



                            async function menuAdmin() {

                                const perguntasAdmin = [
                                    {
                                        type: 'list',
                                        name: 'opcao',
                                        message: 'Escolha uma Ação',
                                        choices: [
                                            { name: chalk.magentaBright('Listar Contatos'), value: "listar" },
                                            { name: chalk.magentaBright('Detalhes Contato'), value: "detalhes" },
                                            { name: chalk.magentaBright('Adicionar um novo Contato'), value: "adicionar" },
                                            { name: chalk.magentaBright('Atualizar um Contato'), value: "atualizar" },
                                            { name: chalk.magentaBright('Excluir um Contato'), value: "excluir" },
                                            { name: chalk.magentaBright('Sair'), value: "sair" },
                                        ]
                                    }
                                ]

                                const respostaB = await inquirer.prompt(perguntasAdmin)
                                switch (respostaB.opcao) {


                                    case 'listar':
                                        const produtos = await listarProdutos();

                                        produtos.forEach(Produto => {
                                            console.log(chalk.cyanBright.bold("ID:"), chalk.yellowBright(`${Produto.id}`),
                                                ' - ', chalk.cyanBright.bold("NOME:"), chalk.yellowBright(`${Produto.nome}`),
                                                ' - ', chalk.cyanBright.bold("Idade:"), chalk.yellowBright(`${Produto.idade}`),
                                                ' - ', chalk.cyanBright.bold("Emai:"), chalk.yellowBright(`${Produto.email}`))
                                        })

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
                                    case 'adicionar':

                                        const novoContato = await inquirer.prompt([
                                            { type: 'input', message: 'Insira o Nome: ', name: 'nome' },
                                            { type: 'number', message: 'Insira a Idade: ', name: 'idade' },
                                            { type: 'input', message: 'Insira o Email: ', name: 'email' }
                                        ])


                                        const dataAdicionarContato = await {
                                            nome: novoContato.nome,
                                            idade: parseInt(novoContato.idade),
                                            email: novoContato.email

                                        }


                                        adicionarContato(dataAdicionarContato, senha.senha)
                                        await timeout(1000)
                                        menuAdmin()
                                        break;

                                    case 'atualizar':

                                        const atualizarContato2 = await inquirer.prompt([
                                            { type: "number", message: "Qual é o id do item a ser alterado", name: "id" },
                                            { type: 'list', message: 'Qual Campo vc deseja alterar?', choices: ['nome', 'idade', 'email'], name: "tipo" },
                                            { type: 'input', message: 'Inisira o novo campo', name: "resposta" }

                                        ])

                                        const data = await {
                                            key: atualizarContato2.tipo,
                                            value: atualizarContato2.resposta
                                        }

                                        atualizarContato(atualizarContato2.id, data, senha.senha)
                                        await timeout(1000)
                                        menuAdmin();
                                        break;
                                    case 'excluir':
                                        const idResposta2 = await inquirer.prompt([
                                            { type: 'input', name: 'id', message: 'Qual ID (produto) vc deseja Excluir: ' }
                                        ])

                                        const detalheProdutoa = await deletarContato(idResposta2.id, senha.senha);
                                        console.log(detalheProdutoa)
                                        menuAdmin();
                                        break;

                                }
                            }

                            menuAdmin();
                       
                    })
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

