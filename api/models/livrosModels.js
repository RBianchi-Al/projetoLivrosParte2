const conexao = require("../../config/conexao.js");

module.exports = {
    listarLivros,
    
    
}

function listarLivros (callback) {
    // console.log("Dentro dassss { MODEL }");
    conexao.query('select A.*, B.aut_apelido, C.edt_nome from livros A left join dados211n.autores B on A.aut_codigo = B.aut_codigo left join dados211n.editoras C on A.edt_codigo = C.edt_codigo ', callback);
    console.log("Retornando da consulta!");
}
