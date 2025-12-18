const { rejects } = require("assert")

function EsperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve()
        },tempo)
    })
}

EsperarPor(2000).then(EsperarPor).then(EsperarPor)

//Async/Await a ideia por tras é fazer o condigo parecer sicrono embora seja assicrono

async function executar() {
    EsperarPor(2000)   
    console.log('Sem await')
    EsperarPor(2000)   
    console.log('Sem await....2')

    await EsperarPor(2000) //async permite que use o await alem de fazer o codigo esperar essa execução   
    console.log('Await')
}

executar()

function gerarNumerosEntre(min,max,proibidos,tempo = 2000){
    if(min>max){
        [max,min] = [min,max]
    } 
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            const random = parseInt(Math.random()*(max - min) + min)
            if(proibidos.includes(random)){
                reject('Numero repetido!')
            }
            else{
              resolve(random)
            }
        },tempo)
    })
}

async function gerarMegaSena(qtd){
    try{
        const numeros = []
        for (let _ of Array(qtd).fill()){
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }
        return numeros
    }catch(e){
        throw "Precisa resolver essa promessa"
    }
}

gerarMegaSena(6).then(console.log).catch(console.log)
