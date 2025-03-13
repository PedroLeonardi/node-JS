const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/5')
    .then(response =>{
        console.log('Dados recebido:', response.data);
    })
    .catch(error =>{
        console.error('Ocorreu um erro:', error);
    })

//pegar