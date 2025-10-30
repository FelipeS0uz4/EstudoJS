//middleware pattern (chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next() //chama o próximo middleware, ele procura o próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo4 = ctx => {
    ctx.valor4 = 'mid4'
}

const passo3 = (ctx, next) => {
    ctx.valor3 = 'mid3'
    next()
}
 
//execução dos middlewares 
const exec = (ctx,...middlewares) => { //...middlewares = [passo1, passo2, passo3]
    const execPasso = indice => { 
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }   
    execPasso(0)
}   

const ctx = {}
exec(ctx, passo1, passo2, passo3, passo4)
console.log(ctx)