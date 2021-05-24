const controllerAutores = require('../controllers/autoresControllers.js');

app.get('/autores/listar', controllerAutores.autoresGetAll);

app.get('/autores/editar/:codigo', controllerAutores.autoresGetByid);

app.post('/autores/gravar', controllerAutores.autoresGravar);


