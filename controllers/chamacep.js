const axios = require('axios')

async function pegaCep(parametro){
  return axios.get('http://localhost:3005/valormetro' ,{ params: { cep: parametro } })
  .then(function (response) {
      return response.data
  })
}

module.exports = pegaCep