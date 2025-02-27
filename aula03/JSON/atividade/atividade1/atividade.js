const fs = require("fs");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

fs.readFile("data.json", "utf8", (err, data) => {
    const dataJS = JSON.parse(data);
    if (err) {
        console.log("houve um erro: ", err);
        return;
    };

    try {
        console.log("seus dados cadastrais são: \n")
        console.log(dataJS);

        readline.question("você deseja adicionar um Campo?(S/N)", respostaNovoCampo => {
            if (respostaNovoCampo == "s" || respostaNovoCampo == "S" || respostaNovoCampo == "sim") {

                readline.question("O que você deseja adicionar?", resposta => {
                    readline.question("insira o campo?", respostacampo => {
                        dataJS[resposta] = respostacampo
                        const data2 = JSON.stringify(dataJS, null, 2)
                        fs.writeFile('data.json', data2, err => {
                            if (err) throw err; // THROW exibe a informaçao e mata o arquvioe cancela a sua rodação
                            console.log('Arquivo salvo!')
                            readline.close()
                        })

                    })

                })

            } else {
                readline.question("Você quer alterar algun iten? (S/N): ", alterar => {

                    if (alterar == "sim" || alterar == "s" || alterar == "S") {
                        readline.question("O que você deseja alterar?", respostaAlterar => {
                            readline.question("insira o campo?", respostacampoAlt => {
                                dataJS[respostaAlterar] = respostacampoAlt
                                const data2 = JSON.stringify(dataJS, null, 2)
                                fs.writeFile('data.json', data2, err => {
                                    if (err) throw err; // THROW exibe a informaçao e mata o arquvioe cancela a sua rodação
                                    console.log('Arquivo salvo!')
                                    readline.close()
                                })

                            })

                        })

                    } else {
                        console.log("Ação encerrada");
                    }
                }) //alterar campo 
            }
        }) // adicionar novo campo

    } catch (error) {
        console.log("Houve um erro: ", error);
        return;
    }

})