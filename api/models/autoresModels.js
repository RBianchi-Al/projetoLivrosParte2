const conexao = require("../../config/conexao.js");

module.exports = {
    getAllAutores,
    getByIdAutores,
    gravarAutores,
    alterarAutores,
}

function getAllAutores(callback){
    conexao.query('select A.* from autores A', callback);
}

function getByIdAutores(id, callback){
    conexao.query('select * FROM autores where aut_codigo = ' + id, callback);

}

function gravarAutores(dados, callback){
    var msql = "insert into autores set ? ";
    conexao.query(mysql, dados, callback);
}

function alterarAutores(dados, callback){
    var msql = "update autores set aut_nome = '" + dados.aut_nome +
    "' , aut_apelido = '" + dados.aut_apelido +
    "' , aut_sexo = '" + dados.aut_sexo +
    "' , aut_telefone = '" + dados.aut_telefone +
    "' , aut_email = '" + dados.aut_email +
    "' where aut_codigo = '" + dados.aut_codigo+ "'";

    conexao.query(msql, callback);

}
