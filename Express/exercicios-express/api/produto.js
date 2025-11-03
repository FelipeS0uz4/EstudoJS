module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send(`${texto} - Usuário salvo com sucesso!`);
    }
    function obte(req, res) {
        res.send(`Produto ${texto} obtido com sucesso!`);
    }

    app.post('/produto', salvar);
    app.get('/produto', obter);
    return { salvar, obter }
}