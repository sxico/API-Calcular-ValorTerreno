
module.exports = app => {
    app.get('/valortotal', (req, res) => {
        const cepimovel = req.query.cep
        const quantidademetros = req.query.metros
        if(cepimovel){
            if(quantidademetros >= 10 && quantidademetros <= 10000){
                console.log('Está Certo!') 
                app.get('https:///localhost:3005/valormetro', (req, res) => {
                    res.send(cepimovel)
                    let dados = req.query.valor
                    console.log(dados)
                })     
            } else{
                res.send('Para o cáculo o imóvel deve ter no mínimo 10 metros e no máximo 100000 metros!')
            }
        } else{
            res.send('O uso do CEP é obrigatório para a consulta!')
        }
    })    
}