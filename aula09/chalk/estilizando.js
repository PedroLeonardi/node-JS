import chalk from 'chalk'

console.log(chalk.blue("Olá mundo Azul"))
console.log(chalk.green.bold("Olá mundo verde negrito"))
console.log(chalk.red.inverse("ERRO!!!"))
console.log (chalk.yellow.bgRed.bold('atenção!!!'))

// necessario ataulizar o package.json adicionando "  "type": "module", "//