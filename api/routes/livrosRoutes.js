const controllerRoutes = require('../controllers/livrosControllers.js');

app.get('/livros/listar', controllerRoutes.livrosControllers);

const controllerLivros = require('../controllers/livrosControllers');

app.get('/', controllerLivros.livrosControllers);


