const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de Parametros

//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.parmas (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registo)

//MongoDB (Não-Relacional)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;