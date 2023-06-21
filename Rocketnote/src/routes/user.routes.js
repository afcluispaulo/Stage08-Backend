const { Router } = require("express");

const UserController = require("../controllers/UserController")

const usersRoutes = Router();

const usersController = new UserController;

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

module.exports = usersRoutes;
