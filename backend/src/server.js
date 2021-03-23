const express = require('express');
const server = express();

    server.get('/', (request, response) => {
        return response.json({ message: `Hello ${request.query.name}` });        
    });
    server.listen(3333);