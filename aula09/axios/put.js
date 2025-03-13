const axios = require('axios');

axios.put('https://jsonplaceholder.typicode.com/todos/5', {
    userId: 1,
    title: 'comprar peixe',
    complete: true
})
.then(response=>{
    console.log('ToDos Ataulizado: ', response.data)
})
.catch(error=>{
    console.error('Ocorreu um erro', error)
})

//alterar todo o conjunto