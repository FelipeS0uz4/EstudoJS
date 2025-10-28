const moduloA = require('../../moduloA')// Importando o móduloA localizado em PastaA
console.log(moduloA.ola)

const HTTP = require('http'); // Importando o módulo HTTP nativo do Node.js

HTTP.createServer((req, res) => {
    res.end('Olá Mundo!') // Enviando uma resposta simples para o cliente
}).listen(8080, () => console.log('Servidor rodando na porta 8080'));