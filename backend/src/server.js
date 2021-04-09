const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const options = {cors: true, origins: ['*:*']};
const io = require('socket.io')(server, options);
const connectedUsers = {};

    io.on('connection', socket => {
        const { user } = socket.handshake.query;
            connectedUsers[user] = socket.id;
                console.log(`User "${user}" logged through Socket "${socket.id}"`);
    });

        mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

            app.use((request, response, next) => { request.io = io; request.connectedUsers = connectedUsers; return next(); });
            app.use(cors());
            app.use(express.json());
            app.use(routes);

                server.listen(3333);