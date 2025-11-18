//Simplificar o uso do promises
const http = require('http');

const getTurmaPromise = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
                http.get(url,res =>{
                let resultado = ''
                res.on('data',dados => {
                    resultado += dados
                })

                res.on('end',() => {
                    try{
                        resolve(JSON.parse(resultado))
                    } catch(e){
                        reject(e)
                    }
                })
            })
        }
    )};

let obterAlunos = async () => { //Await apenas funcionara se caso houver um async
    const TumasA = await getTurmaPromise('A')
    const TumasB = await getTurmaPromise('B')
    const TumasC = await getTurmaPromise('C')
    return [].concat(TumasA,TumasB,TumasC) //Ira retornar um objeto AsyncFunction
}

obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))