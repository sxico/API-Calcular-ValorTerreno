const options = {
  hostname: 'http://localhost:3005',
  port: 443,
  path: '/valormetro',
  method: 'GET'
}

module.exports = app => {
  app.get('/valortotal', (req, res) => {
      const cepimovel = req.query.cep
      const quantidademetros = req.query.metros
      if(cepimovel){
          if(quantidademetros >= 10 && quantidademetros <= 10000){
              console.log('Está Certo!') 
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


