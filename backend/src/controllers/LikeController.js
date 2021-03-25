const Dev = require('../models/Dev');

    module.exports = {
        async store(request, response) {
            const { user } = request.headers;
            const { devId } = request.params;
            const loggedDev = await Dev.findById(user);
            const targetDev = await Dev.findById(devId);
                if(!targetDev) { return response.status(400).json({ error: 'This Developer does not exists.' }); }
                return response.json({ ok: true });
        }
    }