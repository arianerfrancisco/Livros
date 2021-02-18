/* 

Cada porta definirá um processo  a ser executado. No entato, numa mesma API podemos definir  rotas de acesso, que retornarão conteúdos diferentes.

Este caminho é chamado URI - (Uniform Resource Identifer) - rota até o recurso do web service. 

http://localhost:3000/teste
http://localhost:3000/teste1
http://localhost:3000/teste2

A estratégia é que cada rota retornaria um conteúdo diferente, bastando mapeá-las no código.

*/

// carregando os módulos necessários

var http = require('http'); 
var url = require('url');

// Função Callback para o servidor HTTP

var callback = function(request , response) { 
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"}); 
var parts = url.parse(request.url);
if(parts.path == '/') {
    response.end("Site na raiz");
} else if(parts.path == '/carros') {
    response.end("Você digitou a rota /carros");
} else {
    response.end("Rota inválida: " + parts.path);
}
}

// Criando um servidor HTTP, que responderá todas as requisições
var server = http.createServer(callback);
server.listen(3002);
console.log("Servidor iniciado em http://localhost:3002/");