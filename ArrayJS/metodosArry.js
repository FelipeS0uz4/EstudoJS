const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Hamilton', 'Massa'];
pilotos.pop(); //remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); //adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); //adiciona um elemento no início do array
console.log(pilotos);

pilotos.splice(2, 0, 'Bottas', 'Massa'); //adiciona elementos a partir do índice 2
console.log(pilotos);

pilotos.slice(3, 1); //remove 1 elemento a partir do índice 3
console.log(pilotos);

const algusPilotos = pilotos.slice(2); //cria um novo array a partir do índice 2
console.log(algusPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); //cria um novo array do índice 1 ao 4 (não inclui o 4)
console.log(algunsPilotos2);