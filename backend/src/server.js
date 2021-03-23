const express = require('express');
const server = express();

    server.get('/', (request, response) => {
        return response.send('Hello World');        
    });
    server.listen(3333);