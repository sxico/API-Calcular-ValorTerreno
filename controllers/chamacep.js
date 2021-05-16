const { response } = require('express')
const https = require('https')


const options = {
  hostname: 'http://localhost:3005',
  port: 443,
  path: '/valormetro',
  method: 'GET'
}

async function chamacep(params) {
    return new Promise(function(resolve, reject){
        const req = https.request(options, params, res => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', d => {
              process.stdout.write(d)
            })
          })
          
          req.on('error', error => {
            console.error(error)
          })
          
          req.end()
        response('Texto')  
    })
}

module.exports = chamacep