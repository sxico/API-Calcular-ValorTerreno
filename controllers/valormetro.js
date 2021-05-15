const valorMetro = require('../models/valormetro')

module.exports = app => {
    app.get('/valormetro', async (req, res) => {
        const pesquisa = req.query.cep;
        const retorno = await valorMetro(pesquisa);
        res.json(retorno);
    })    
}