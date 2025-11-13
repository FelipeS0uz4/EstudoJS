//Arrow function sintaxe reduzida e são uma função anonima
const soma = (a,b) => a + b;
console.log(soma(2,4))

//Arrow function (this =  lugar que ela foi escrita)
const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()


//Parametro default
function log(texto = 'Padrão'){
    console.log(texto)
}

log(undefined);
log(null);
log('Agora tenho texto');

//Operador rest 
function total (...numeros){
    let total = 0
    numeros.forEach(n => {
        total += n
    });
    return console.log(total)
}

total(2,2,2,2,2)
