const express = require('express');
const app = express();
const saudacao = require('./saudacaoMid');
const bodyParser = require('body-parser');
const usuarioAPI = require('./api/usuarioAPI');
const produtoAPI = require('./api/produto');

produtoAPI(app, 'Produto API');


app.post('/usuario', usuarioAPI.salvar);
app.get('/usuario', usuarioAPI.obter);

app.use(saudacao('Felipe')); // Usando o middleware de saudação
app.use(bodyParser.text()); // Middleware para interpretar corpo como texto
app.use(bodyParser.json()); // Middleware para interpretar corpo como JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para interpretar corpo como dados de formulário



app.get('/ola', (req, res) => { // Use é utilizado para qualquer requisição
    res.send('Olá, Express!');
})

app.get('/get', (req, res) => { // Rota específica para requisições GET
    res.send('<h1>Você fez uma requisição GET!</h1>');
});

app.get('/get/json',(req, res) => {
    res.json({
        name: 'Iphone 14',
        price: 6999,
        color: 'Preto'
    });
});

app.get('/clientes/relatorio',(req, res) => { // A ordem dos parâmetros importa coloque os mais específicos primeiro
    res.send(`Relatório: completo = ${req.query.completo} & ano = ${req.query.ano}`);
})

app.post('/corpo', (req, res) => { // Rota para requisições OPTIONS
    let corpo = '';
    req.on('data', function(parte) {//event listener para dados chegando
        corpo += parte;
    });
    req.on('end', function() {//event listener para fim dos dados
        res.send(corpo);
    });
});

app.post('/corpo/bodyparse', (req, res) => { // Usando body-parser para interpretar o corpo
    res.send(req.body);
});

app.get('/clientes/:id',(req, res) => { // os ":" indicam que é um parâmetro dinâmico
    res.send(`Cliente ${req.params.id} selecionado!`);

})


app.listen(8080, () => {
    console.log('Servidor rodando na porta http://localhost:8080');
});