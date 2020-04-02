const express = require("express");
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

import ongValidator from './validators/OngValidator'

routes.post('/session',SessionController.create);

routes.get('/ongs', OngController.list);


routes.post("/ongs", celebrate(ongValidator()) ,OngController.create);

routes.post('/incident',IncidentController.create);
routes.get('/incident',IncidentController.list);
routes.delete('/incident/:id',IncidentController.delete);


routes.get('/profile',celebrate({
    [Segments.HEADERS] : Joi.object().keys({
        authorization: Joi.string().required()
    })
}), ProfileController.index);


module.exports = routes;