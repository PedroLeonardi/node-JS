const { isUtf8 } = require('buffer');
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data);

})