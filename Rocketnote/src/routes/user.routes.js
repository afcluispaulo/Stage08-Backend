const { Router } = require("express");

const UserController = require("../controllers/UserController")

const usersRoutes = Router();

const usersController = new UserController;

function myMiddlware(request, response, next) {
    console.log("Você passou pelo Middlware!")
    
}








usersRoutes.post("/", myMiddlware, usersController.create);

module.exports = usersRoutes;
