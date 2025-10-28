//No contexto de um módulo Node.js, 'this' refere-se a 'module.exports'
console.log(this === module.exports) //true
console.log(this === exports) //true
console.log(this === global) //false

function logThis() { //Dentro de uma função, 'this' refere-se ao objeto global
    console.log('Dentro de uma função...')
    console.log(this === module.exports) //false
    console.log(this === exports) //false
    console.log(this === global) //true
}

logThis()