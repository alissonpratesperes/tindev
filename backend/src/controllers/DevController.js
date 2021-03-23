const axios = require('axios');

    module.exports = {
        async store(request, response) {
            const { username } = request.body;
            const apiResponse = await axios.get(`https://api.github.com/users/${username}`);
                return response.json(apiResponse.data);
        }
    };