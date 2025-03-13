const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/999')
    .then(response =>{
        console.log('Dados recebido:', response.data);
    })
    .catch(error =>{
        console.error('Ocorreu um erro:', error.massage);
        console.error('Codigo de Status:', error.response.status);
        console.error('Descriçao erro: ', error.response.statusText)
    })