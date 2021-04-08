const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const options = {cors: true, origins: ['*:*']};
const io = require('socket.io')(server, options);

    io.on('connection', socket => {
        console.log('Nova conexão:', socket.id);
            socket.on('hello', message => {
                console.log(message);
            });
                setTimeout(() => {
                    socket.emit('world', {
                        message: 'OmniStack'
                    });
                }, 5000);
    });

        mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

            app.use(cors());
            app.use(express.json());
            app.use(routes);

                server.listen(3333);