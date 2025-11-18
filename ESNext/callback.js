
const http = require('http')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url,res =>{
        let resultado = ''
        res.on('data',dados => {
            resultado += dados
        })

        res.on('end',() => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A',alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B',alunos =>{
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C',alunos =>{
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})



//Com o uso do promise
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
    )}

let nomePromise = []
getTurmaPromise('A').then(alunos =>{
    nomePromise = nomePromise.concat(alunos.map(a => `A: ${a.nome}`))
    getTurmaPromise('B').then(alunos =>{
        nomePromise = nomePromise.concat(alunos.map(b => `B: ${b.nome}`))
        getTurmaPromise('C').then(alunos =>{
            nomePromise = nomePromise.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomePromise)
        })
    })
})

Promise.all([getTurmaPromise('A'), getTurmaPromise('B'), getTurmaPromise('C')])
.then(turmas => [].concat(...turmas)).then(alunos =>alunos.map(alunos=>alunos.nome))
.then(nomes => console.log(nomes))

getTurmaPromise('D').catch(e => console.log(e.message)) //gerando ou exceção 