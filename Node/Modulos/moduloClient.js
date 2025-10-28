const moduloA = require('./moduloA') //Importando o móduloA
const moduloB = require('./moduloB') //Importando o móduloB
//Qual a diferença entre require e import? 
//require é usado no Node.js, enquanto import é parte do padrão ES6 e pode ser usado em navegadores modernos e em Node.js com suporte adequado.
//No Node.js, require é síncrono e carrega módulos de forma imediata, enquanto import pode ser assíncrono e suporta carregamento dinâmico.
//No entanto, ambos servem para importar funcionalidades de outros arquivos ou módulos.
//No Node.js, ambos os sistemas podem ser usados, mas require é mais comum em projetos Node.js tradicionais.
//Não se deve misturar os dois sistemas no mesmo arquivo para evitar confusão.


console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)