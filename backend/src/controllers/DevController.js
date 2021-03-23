const axios = require('axios');
const Dev = require('../models/Dev');

    module.exports = {
        async store(request, response) {
            const { username } = request.body;
            const apiResponse = await axios.get(`https://api.github.com/users/${username}`);
            const { name, bio, avatar_url: avatar } = apiResponse.data;    
            const dev = await Dev.create({ name, user: username, bio, avatar });    
                return response.json(dev);
        }
    };