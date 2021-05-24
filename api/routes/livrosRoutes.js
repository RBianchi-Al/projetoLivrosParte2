const controllerLivros = require('../controllers/livrosControllers.js');

app.get('/livros/listar', controllerLivros.listarLivros);
