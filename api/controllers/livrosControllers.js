const livrosController = require("../models/livrosModels.js");

module.exports = {
    livrosControllers,

    
}


function livrosControllers(req, res){
    res.render('livros/livros_corpo.ejs', {
        title: 'NodeJs-Livros',
        titulo: 'Projeto CRUD - Nodejs - Express - Mysql - JavaScript',
        subtitulo:'Programação Script - WEB - 5º Semestre',
        livros:'Livros',
        editoras:'Editoras',
        autores: 'Autores',
        usuarios:'Usuários',
        configuracoes:'Configurações',
        nomealuno:'Renata Bianchi'
    });
};
