const fs = require('fs') //importa o módulo File System

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {//Convertendo o objeto JavaScript para JSON
    console.log(err || 'Arquivo salvo!') //Se der erro, mostra o erro, senão mostra a mensagem
})