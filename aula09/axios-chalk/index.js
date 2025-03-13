import chalk from "chalk";
import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/todos/201')
    .then(response=>{
        console.log(chalk.green('Dados recebidos'));
        console.log(response.data);
    })
    .catch(error =>{
        console.error(chalk.red.inverse(error.message))
    })