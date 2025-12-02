function funcionarOuNao(valor,chanceError){
    return new Promise((resolve,reject)=>{
        if (Math.random()<chanceError){
            reject('Ocorreu um erro!')
        }
        else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando..',0.9).then(console.log).catch(err => console.log(`Error: ${err}`))