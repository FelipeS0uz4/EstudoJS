//Reduce é um método que reduz o array a um único valor, aplicando uma função a um acumulador e a cada valor do array (da esquerda para a direita).
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {//irá receber dois parâmetros, o acumulador e o valor atual
    console.log("Quanto tem agora " + acumulador,"Quanto sera somado: " + atual) //Irá mostrar o valor do acumulador e o valor atual a cada iteração
    return acumulador + atual //irá somar o valor do acumulador com o valor atual
})

console.log(resultado) //irá mostrar a soma de todas as notas dos alunos

//Exercicios de fixação

const bolsistas = alunos.map(b => b.bolsista).reduce(function(anterior, atual) {
    return anterior && atual //irá verificar se todos os alunos são bolsistas
})
console.log(bolsistas) //irá mostrar false, pois nem todos os alunos são bolsistas

const algumBolsista = alunos.map(b => b.bolsista).reduce(function(anterior, atual) {
    return anterior || atual //irá verificar se algum aluno é bolsista
})
console.log(algumBolsista) //irá mostrar true, pois existe pelo menos um aluno bolsista

//Forma reduzida usando arrow function
const todosBolsistas = alunos.map(b => b.bolsista).reduce((anterior, atual) => anterior && atual)
console.log(todosBolsistas) 

const algumBolsista2 = alunos.map(b => b.bolsista).reduce((anterior, atual) => anterior || atual)
console.log(algumBolsista2)