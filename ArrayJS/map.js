//map serve para mapear um array, ou seja, transformar um array em outro array
const nums = [1, 2, 3, 4, 5]
//ela pode receber três parâmetros: o valor atual, o índice e o array original
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)
