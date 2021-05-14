const conexao = require('../infraestrutura/conexao')

async function busca(params) {
    const sql = 'SELECT valor FROM valorCep WHERE cep=?'
    const resultado = await conexao.query(sql, params, (erro, retorno) => {
        if(erro) {
            console.log(erro)
        } else {
            console.log(retorno)
        } return retorno
    } )
}

module.exports = {busca}