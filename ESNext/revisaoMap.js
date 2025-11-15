const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: false})

console.log(tecnologias.react) //Não vai dar certo (dando undefined)
console.log(tecnologias.get('react'))

const chavesVariadas =  new Map([
    [ function (){},'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl,ch)=>{
   console.log(`Chave: ${ch}  Valor: ${vl}`) 
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //Ira sobreescrever pois não pode ter dois com a mesma chave
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)