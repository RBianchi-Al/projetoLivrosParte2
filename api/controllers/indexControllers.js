const indexController = require('../models/indexModels.js');

module.exports = {
    indexControllers

}

function indexControllers(req, res){
    res.render('inicio/corpo_index.ejs', {title:  'Projeto NodeJs - Rotas',
                             texto:  'Projeto CRUD - NdeJs - Express - MySql - JS',
                             versao: '* Versão Mysql *',
                             data:   '* Obter Data *',
                             hora:   '* Obter Hora *'
    });
};



