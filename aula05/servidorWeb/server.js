const http = require('http'); //modulo de server http

const produtos = [
    {id: 1, nome: "produtos A", preço: 10},
    {id: 2, nome: "produtos B", preço: 20},
    {id: 3, nome: "produtos C", preço: 30}
]


const server = http.createServer((req, res)=>{ // cria o server http

const {method, url} = req; //cria uma constante que evita chamar separado  ${req.method}....... nova escrita ${method}

    console.log(`Requisição recebida: ${method} ${url}`); //coleta a requisição com o metodo e a url 

    if (url === "/" && method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.end('<h1>Página Incial</h1>');

    } else if (url === "/produtos" && method === "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'}); 
        res.end(JSON.stringify(produtos));

    } else if(url.startsWith('/produtos/') && method ==="GET"){
        const id = parseInt(url.split ('/')[2])//SPLIT é o explode, ('o paramentro da quebra')[o numero da parte quebrarda]
        //PARSEINT tranforma em um numero inteiros
        const produto = produtos.find(p => p.id === id) //P.ID => busca pela chave id o numero do meu id

        if(produto){            
            res.writeHead(200, {'Content-Type': 'application/json'}); 
            res.end(JSON.stringify(produto));
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'}); 
            res.end('<p>ERRO 404: Produto não foi encontrado!!!</p>');
        }
    }

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1>Seridor Web Simples Rodando</h1>');



});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Servidor rodando em http: localhost: ${port}`);
});