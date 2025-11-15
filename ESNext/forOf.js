//
for (let letra of "Felipe Souza Panichi"){
    console.log(letra)
} 

const assuntosEcnma  = ['Map','Set','Promise']

for (let i in assuntosEcnma){
    console.log(i)
}

for (let assunto of assuntosEcnma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valores of assuntosMap.values()){
    console.log(valores)
}

for(let [ch,vl] of assuntosMap.entries()){  
    console.log(ch, vl)
}
 
const s = new Set(['a','b','c'])
for (let letra of s){
    console.log(letra)
}