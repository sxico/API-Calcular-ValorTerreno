const valorMetro = require('../models/valormetro')

module.exports = app => {
    app.get('/valormetro', async (req, res) => {
        const pesquisa = req.query.cep
        const retorno =  valorMetro.busca(pesquisa)
        return await retorno
    })    
}