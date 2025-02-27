const http = require('http'); //modulo de server http
const { Stream } = require('stream');

// const options = {
//     host: 'localhost',
//     port: 3000,
//     path: '/produtos/',
//     method: 'POST'
//   };

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
    } else if (url === "/contato" && method === 'POST') {
        let body = '';//variavel para armazenar o POST
        req.on('data', Stream => {//=> chunk trehco dos dados, stream => toda a mensagem 
            body += Stream
        });

        req.on ('end', ()=>{ //req.on receber a requsicao
            console.log('Dados recebidos: ', body);
            res.writeHead(201, {'Content-type': 'text/plain'}); //text palin, é o metdodo de excibir a mensagem, ao invez d html
            res.end ('Dados de Contato recebidos com sucesso!!!')
        });
    };

    // const reqpost = http.request(options, function(res1) {
    //     console.log('STATUS: ' + res1.statusCode);
    //     console.log('HEADERS: ' + JSON.stringify(res1.headers));
    //     res1.setEncoding('utf8');
    //     res1.on('data', function (chunk) {
    //       console.log('BODY: ' + chunk);
    //     });
    //   });
      
    //   reqpost.on('error', function(e) {
    //     console.log('problem with request: ' + e.message);
    //   });
      
    //   // write data to request body
    //   reqpost.write('data\n');
    //   reqpost.write('data\n');
    //   reqpost.end();
    

});

const port = 3000;
server.listen(port, ()=>{
    console.log(`Servidor rodando em http: localhost: ${port}`);
});