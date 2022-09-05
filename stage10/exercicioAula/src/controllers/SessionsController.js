const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class SessionsContoller {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await knex("users").where({email}).first();

        if(!user) {
            throw new AppError("E-mail e/ou usuário incorreto", 401);
        }

        return response.json( user );
    }
}

module.exports = SessionsContoller