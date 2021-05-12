const bodyParser = require("body-parser")
const ValorMetro = require('../models/valormetro')

module.exports = app => {
    app.get('/valormetro', (req, res) => {
        const valormetro = req.query.cep
        const retorno = ValorMetro.busca(valormetro)
        res.send(retorno)
    })    
}