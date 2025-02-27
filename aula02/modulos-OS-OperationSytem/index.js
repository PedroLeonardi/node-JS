// importar os moduls em primeiro lugar

const os = require ('os')
console.log (`plataforma ${os.platform()}`)
console.log(`Arquitetura: ${os.arch()}`)

// console.log(`informação:  ${os.cpus()}`)  Para ARRYS não é possivel exiber com `CRASE` pq não executa como array


console.log("informacao: " , os.cpus())
console.log(`Arquitetura: ${os.arch()}`)
// console.log('informação: ', os.cpus())
// console.log('diretortio do usuario: ', os.homedir())
// console.log('sistema operacional', os.type())
// console.log('versao do sistema: ', os.version())
// console.log('interface de rede: ', os.networkInterfaces())