//Estrutura de conjunto não indexada e que não aceita repetições
const times = new Set()
times.add('Vasco')
times.add('Corinthias').add('Santos').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')// Repetindo para demonstrar que o set não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Santos')
console.log(times.has('Santos'))

const nomes = ['Felipe', 'Nicolas','Joao','Maria']
const nomeSet = new Set(nomes)
console.log(nomeSet)