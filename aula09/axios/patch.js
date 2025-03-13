const axios = require('axios');

axios.patch('https://jsonplaceholder.typicode.com/todos/5', {
    title: 'comprar pão',
})
.then(response=>{
    console.log('ToDos ataulizados (parcial): ', response.data)
})
.catch(error=>{
    console.error('Ocorreu um erro', error)
})

// ataulziza somente o campo seleconadao "TITLE"