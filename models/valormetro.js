const conexao = require('../infraestrutura/conexao')
class Cep  {
    busca(valor) {
        const sql = 'SELECT valor FROM valorCep WHERE cep=?'
        const resultado = conexao.query(sql, valor, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
        return resultado
    }
}
        
        
        module.exports = new Cep

       