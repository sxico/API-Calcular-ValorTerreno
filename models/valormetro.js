const conexao = require('../infraestrutura/conexao')

/**Função recebe um parametro(CEP)
 *e busca na base de dados MySQL e retorna o valor do metro
 * @param { String } params - Recebe uma String - CEP
 * @returns { String } - Retorna uma string - Valor Metro
 **/ 
 async function busca(params) {
    return new Promise(function(resolve, reject){
        conexao.query('SELECT valor FROM valorCep WHERE cep=?' ,params, (erro, resultado) => {
            if(erro) {
                reject(erro)
            }else{
                resolve(resultado[0])
            } 
        })
    })
}

module.exports = busca