const mysql = require('mysql')

var configuracoesDB = {
    host: 'remotemysql.com',
    port: 3306,
    user: 'yo946YDTYH',
    password: 'BNI5Jlp1LZ',
    database: 'yo946YDTYH'
}

const conexao = new mysql.createConnection(configuracoesDB)

conexao.connect(
    function (err) { 
        if (err) { 
            console.log("Não foi possível conectar - Error:");
            throw err;
        }
        else {
            console.log("Conexão realizada com sucesso!");
        }
    });

module.exports = conexao