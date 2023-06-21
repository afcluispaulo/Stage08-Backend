const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UserController {

    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (checkUserExist) {
            throw new AppError("Este e-mail já está em uso.");
        }

        await database.run("INSERTO INTO users (name, email, password) VALUES (?) (?) (?)", 
            [name], [email], [password]
        );

        return response.status(201).json();

    }


}
 
module.exports = UserController;