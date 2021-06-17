const controllerRoutes = require('../controllers/livrosControllers.js');

app.get('/livros/listar', controllerRoutes.livrosListar);

const controllerLivros = require('../controllers/livrosControllers');

app.get('/', controllerLivros.livrosListar);


