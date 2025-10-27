Array.prototype.reduce2 = function(callback, valorInicial) {
    let acumulador = valorInicial === undefined ? this[0] : valorInicial
    let inicio = valorInicial === undefined ? 1 : 0
    for (let i = inicio; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }   
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2(soma, 21)) // com valor inicial
console.log(nums.reduce2(soma)) // sem valor inicial