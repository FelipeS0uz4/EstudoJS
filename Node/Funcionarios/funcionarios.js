const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    // Mulher chinesa com menor salário
    const mulherChinesaMenorSalario = funcionarios
        .filter(f => f.pais === 'China' && f.genero === 'F')
        .reduce((menor, funcionario) => {
            return funcionario.salario < menor.salario ? funcionario : menor
        })
    console.log(mulherChinesaMenorSalario)
}
)