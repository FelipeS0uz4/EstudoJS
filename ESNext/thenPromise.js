let a = 1
console.log(a)

let b = new Promise(
    function(cumprirPromessa){
        cumprirPromessa(3) // Pode só ter um valor nessa promessa e não sera considerado caso haja outro valor
    }
)

b.then(function(valor){
    console.log(valor)
})

let lista = new Promise(
    function(cumprirPromessa){
        cumprirPromessa(['Felipe','Maria','Luis'])
    }
)

lista.then(function(valor){
    console.log(valor)
})

let objeto = new Promise(
    function(cumprirPromessa){
        cumprirPromessa({
            x: 3,
            y: 5
        })
    }
)

objeto.then(function(valor){
    console.log(valor)
})

//Destrinchar a promise

lista.then( valor => valor[0]) // Pegara o primeiro valor da lista
     .then( primeiro => primeiro[0]) //Pegara a primeira letra do valor retirado da lista
     .then( letra => letra.toLowerCase())
     .then( letraMinuscula => console.log(letraMinuscula))