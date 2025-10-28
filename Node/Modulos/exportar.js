module.exports === this
module.exports === exports

this.a = 1
exports.b = 2
module.exports.c = 3
exports = null // Não altera o module.exports pois exports é uma referência
console.log(module.exports)

exports = {
    nome: 'Teste'
} // Não altera o module.exports

console.log(module.exports)