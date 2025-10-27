//O metodo concat serve para concatenar arrays
//ele não modifica o array original, mas sim cria um novo array com os elementos dos arrays concatenados

const filhas = ['Valesca', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos)

//Diferença entre concat e push
//o push modifica o array original, adicionando os elementos no final do array
const a = [1, 2, 3] 
const b = [4, 5, 6]
a.push(...b) //usando o operador spread para adicionar os elementos de b no final de a
console.log(a) //a foi modificado

//usando o concat
const c = [1, 2, 3]
const d = [4, 5, 6]
const e = c.concat(d) //c não foi modificado, um novo array foi criado
console.log(c)
console.log(e)