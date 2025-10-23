//map serve para mapear um array, ou seja, transformar um array em outro array
const nums = [1, 2, 3, 4, 5]
//ela pode receber três parâmetros: o valor atual, o índice e o array original
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

//Map não modifica o array original e sim gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //Ira formatar o número para o formato de dinheiro brasileiro

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//Foi usado o encadeamento de funções para aplicar várias transformações no array
console.log(resultado)