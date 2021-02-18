var http = require('http'); // carregar o módulo HTTP
var server = http.createServer(function(requeste, response) { // criando um servidor HTTP que vai responder "Hello Word" para todas as requisições
    response.writeHead(200, {"Content-Type": "text/plain"}); // define o cabeçalho com o tipo de resposta
    response.end("Hello Word porta 3000") // Mensagem de retorno
})
server.listen(3000); // porta que o servidor irá escutar
console.log("Servidor iniciado em http://localhost:3000/"); // para testar > colar http://localhost:3000 no browser

/* A função creatServer([requestListener]) da liha 2 recebeu outra função como argumento.
Este argumento poderá ser criado separadamente. */

var http = require('http');
var callback = function(requeste, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.end("Hello Word porta 3001") 
};
var server = http.createServer(callback);
server.listen(3001); 
console.log("Servidor iniciado em http://localhost:3001/")