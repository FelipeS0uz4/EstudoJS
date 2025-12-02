// setTimeout(function(){
//     console.log('Executando Callback...')

//     setTimeout(function(){
//         console.log('Executando Callback...')   
//     },2000)
// }, 2000)


function EsperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve()
        },tempo)
    })
}

let e = EsperarPor(3000).then(text => console.log(text)).then(EsperarPor)

function gerarNumerosEntre(min,max){
    if(min>max){
        [max,min] = [min,max]
    } 

    return new Promise(resolve =>{
        const random = parseInt(Math.random()*(max - min) + min)
        resolve(random)
    })
}

gerarNumerosEntre(30,20).then(console.log)