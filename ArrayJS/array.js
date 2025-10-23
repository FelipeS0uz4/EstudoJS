//não existe array em JS, mas sim objetos com comportamentos de array
console.log(typeof Array, typeof new Array, typeof [])
//array é uma estrutura heterogênea, que aceita qualquer tipo de dado
//porem não é ideial misturar tipos diferentes em um array
let aprovados = new Array('Bia', 'Carlos', 'Ana') //Não indicado
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']//Recomendado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined
aprovados[3] = 'Paulo' //adiciona na posição 3
aprovados.push('Abia') //adiciona na próxima posição disponível

console.log(aprovados.length) //tamanho do array
aprovados[9] = 'Rafael' //adiciona na posição 9, deixando posições anteriores vazias
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //true

console.log(aprovados)//antes de ordenar
aprovados.sort() //ordena o array de forma alfabética
console.log(aprovados)//depois de ordenar

delete aprovados[1] //deleta o elemento da posição 1, mas mantém a posição vazia
console.log(aprovados[1]) //undefined

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //remove 1 elemento a partir do índice 1
console.log(aprovados)