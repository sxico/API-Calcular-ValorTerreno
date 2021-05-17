const mysql = require('mysql')

var configuracoesDB = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'basecepvalor'
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