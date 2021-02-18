var http = require('http');
var url = require('url');
var fs = require('fs'); // módulo para leitura de arquivo

// funcao que ira ler o arquivo e responde-lo no response

function readFile( response, file) {
    fs.readFile(file, function(err, data) {
        response.end(data);
    });
}
