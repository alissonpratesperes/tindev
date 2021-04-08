const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

        app.use(cors());
        app.use(express.json());
        app.use(routes);

            server.listen(3333);