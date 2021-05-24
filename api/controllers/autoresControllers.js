const autoresController = require("../models/autoresModels.js");

module.exports = {
    autoresGetAll,
    autoresGetByid,
    autoresGravar
}

function autoresGetAll(req, res) {
    console.log("Listar Autores { MODELS}");
    autoresController.getAllAutores(function (err, resultado){
        console.log("Autores {M O D E L}", resultado);
        if(err) {
            throw err;
        } else {
            res.render('autores/autores_corpo.ejs',{
                title: 'NodeJs-Livros',
                obj_autores: resultado,
                
            });
        } 
    })
    //res.send("Rota autores encontrada");
}

function autoresGetByid(req, res){
    var id = req.params.codigo;
    console.log("Parametro esperado: " + id);

    autoresController.getByIdAutores(id, function(err, resultado){
        console.log("Retorno Autores { Model }\n"+ resultado);
        if(err) {
            throw err;
        } else{
            res.render('autores/autores_edit.ejs', {
                title:'NodeJs-Livros',
                obj_autores: resultado,
                caminho: req.originalUrl
            });
            //res.send("Rota autores encontrada");
        }
    })
}

function autoresGravar(req,res){
    const dados = req.body;
    console.log("Gravando Autores");
    console.log(req.body);
    if(dados.aut_codigo == ""){
        console.log("Inserindo Novo Registro de Autores");
        dados.aut_codigo = null;
        autoresController.gravarAutores(dados, function(err, resultado){
            if(err){
                throw err
            } else {
                res.redirect("/autores/listar");
            }
        })
    } else {
        console.log("Alterando Autores!", dados.aut_codigo);
        autoresController.alterarAutores(dados, function ( err, resultado){
            if(err){
                throw err
            } else {
                res.redirect("/autores/listar");
            }
        })
    }
}
