//O metodo flatmap é uma combinação do map com o flat
//Ele primeiro mapeia cada elemento usando uma função de mapeamento, depois achata o resultado em um novo array
//O flatmap é útil quando você quer aplicar uma função que retorna um array para cada elemento e quer um array único como resultado

const escola = [
    {nome: 'Turma M1', alunos: [
            { nome: 'Gustavo', nota: 8.1 },
            { nome: 'Ana', nota: 9.3 }
        ]
    },
    {nome: 'Turma M2', alunos: [    
            { nome: 'Rebeca', nota: 8.9 },
            { nome: 'Roberto', nota: 7.3 }
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma) //Irá retornar um array de arrays
console.log(notas1) //[[8.1, 9.3], [8.9, 7.3]]
//Usando flatmap para retornar um array único com todas as notas
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) //[8.1, 9.3, 8.9, 7.3]
//Usando flatmap com arrow function
const notas3 = escola.flatMap(turma => turma.alunos.map(aluno => aluno.nota))
console.log(notas3)