const express = require('express');
const routes = express.Router();

    routes.get('/', (request, response) => {
        return response.json({ message: `Hello ${request.query.name}` });        
    });

        module.exports = routes;