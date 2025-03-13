const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/todos', {
    userId: 101,
    title: 'comprar pão',
    complete: false
})
.then(response=>{
    console.log('Novo ToDos: ', response.data)
})
.catch(error=>{
    console.error('Ocorreu um erro', error)
})

//adicoinar