const Dev = require('../models/Dev');

    module.exports = {
        store(request, response) {
            console.log(request.params.devId);
            console.log(request.headers.user);
                return response.json({ ok: true });
        }
    }