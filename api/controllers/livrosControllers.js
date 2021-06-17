const livrosControllers = require("../models/livrosModels.js");

module.exports = {
    livrosListar,

    
}


function livrosListar(req, res){
    livrosControllers.listarLivros(function (err, resultado){
        console.log('Listar Livros { MODEL }')
        if(err){
            throw err;
        }else {
            res.render('livros/livros_corpo.ejs', {
                title: 'NodeJs-Livros',
                titulo: 'Projeto CRUD - Nodejs - Express - Mysql - JavaScript',
                subtitulo:'Programação Script - WEB - 5º Semestre',
                livros:'Livros',
                editoras:'Editoras',
                autores: 'Autores',
                usuarios:'Usuários',
                configuracoes:'Configurações',
                nomealuno:'Renata Alexandre Bianchi',
                obj_livros: resultado
            });
        
        }
    })    
};
