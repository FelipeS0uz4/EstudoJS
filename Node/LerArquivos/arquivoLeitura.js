const fs = require('fs')//importa o módulo File System
const caminho = __dirname + '/arquivo.json'
//Lendo arquivo de forma síncrona

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//Lendo arquivo de forma assíncrona
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo) //Convertendo o conteúdo JSON para objeto JavaScript
    console.log(config.db)
})


const config = require('./arquivo.json') //Forma mais simples de ler JSON
console.log(config.db)

fs.readdir(__dirname,(err,arquivos)=>{ //Lendo o conteúdo de um diretório
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})