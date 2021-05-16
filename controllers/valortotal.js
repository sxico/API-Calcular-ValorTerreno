const pegaCep = require('./chamacep')

module.exports = app => {
  app.get('/valortotal',  async (req, res) => {
      const cepimovel = req.query.cep
      const quantidademetros = req.query.metros
      if(cepimovel){
          if(quantidademetros >= 10 && quantidademetros <= 10000){
              console.log('Está Certo!') 
              const resultado = await pegaCep(cepimovel);
              res.json(resultado);
              /*
               Lógica aqui - Mágica
               */
      } else {
                res.json('CEP é obrigatório para o operação')
          }     
      } else{
              res.send('Para o cáculo do imóvel deve ter no mínimo 10 metros e no máximo 100000 metros!')
      } 
  })    
}


