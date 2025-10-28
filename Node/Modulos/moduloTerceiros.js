const _ = require('lodash'); // Importando a biblioteca lodash
console.log('Apenas um teste');

setInterval(() => {
    console.log(_.random(1, 1000)); // Gerando e exibindo um número aleatório entre 1 e 1000 a cada segundo
}, 500);

console.log('Apenas um teste');