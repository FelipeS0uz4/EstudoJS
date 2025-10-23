const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome,indice){ // callback com função anônima 
//primeiro parâmetro é o valor, o segundo é o índice e por fim o terceiro é o array completo
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // callback com arrow function

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // callback com função nomeada   