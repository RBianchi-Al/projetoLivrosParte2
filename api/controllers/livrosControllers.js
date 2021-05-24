const livrosController = require("../models/livrosModels.js");

module.exports = {
    listarLivros,
    
}

function listarLivros(req, res){
    livrosController.listarLivros(function (err, resultado){
        console.log("Listar Livro {Model}" , resultado);
    })
    
}