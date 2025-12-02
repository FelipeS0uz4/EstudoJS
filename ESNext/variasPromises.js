function gerarNumerosEntre(min,max,tempo = 2000){
    if(min>max){
        [max,min] = [min,max]
    } 
    return new Promise(resolve =>{
        setTimeout(function(){
            const random = parseInt(Math.random()*(max - min) + min)
            resolve(random)
        },tempo)
    })
}

function gerarVarios(){
    return Promise.all([
        gerarNumerosEntre(2,40,1000),
        gerarNumerosEntre(39,60,1500),
        gerarNumerosEntre(90,100,3000),
        gerarNumerosEntre(130,240,100),
        gerarNumerosEntre(223,140,500),
    ])
}

gerarVarios().then(numeros => console.log(numeros))