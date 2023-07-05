const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js");

const usersRoutes = Router();

const usersController = new UsersController();

function myMiddlware(request, response, next) {
    console.log("Você passou pelo Middlware!");
    console.log(request.body);

    if(!request.body.isAdmin) {
        return response.json({ message: "user unauthorized"});
    }

    // se não chamar o Next, o Insomnia rodará infinitamente
    next();
     
}

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;
