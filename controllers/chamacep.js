const axios = require('axios')

async function pegaCep(parametro){
    return new Promise(function(resolve, reject){
      axios.get('http://localhost:3005/valormetro' ,{ params: { cep: parametro } }, (erro, result)=> {
        if(erro) {
          reject(erro)
      }else{
          resolve(result)
      } 
      })  
    });  
}
module.exports = pegaCep