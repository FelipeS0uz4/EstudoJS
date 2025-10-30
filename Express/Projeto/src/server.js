const server = {
    host: 'localhost',
    port: 4000
};

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bd = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/produtos',(req,res,next)=>{
    res.send(bd.getProdutos());
})

app.get('/produto/:id',(req,res,next)=>{
    res.send(bd.getProduto(req.params.id));
})

app.post('/produto',(req,res,next)=>{
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto);
})

app.put('/produto/:id',(req,res,next)=>{
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto);
})

app.delete('/produto/:id',(req,res,next)=>{
    const produto = bd.deleteProduto(req.params.id);
    res.send(produto);
})

app.listen( server.port, server.host, ()=>{
    console.log(`Servidor rodando em http://${server.host}:${server.port}`);
}
)