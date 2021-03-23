const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

        server.use(express.json());
        server.use(routes);
        server.listen(3333);