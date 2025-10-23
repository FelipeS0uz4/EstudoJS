class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { 
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

//herança em classe
class Avo {
    constructor(sobrenome) { 
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //herda de Avo
    constructor(sobrenome, profissao = 'Professor') { //herda de Avo
        super(sobrenome) //chama o construtor da classe Avo
        this.profissao = profissao
    }
}

class Filho extends Pai { //herda de Pai
    constructor() { 
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
console.log(filho.sobrenome)
console.log(filho.profissao)