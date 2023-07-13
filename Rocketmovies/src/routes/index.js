const { Router } = require("express");

const usersRouter = require("./user.routes");
const movieNotesRoutes = require("./movienotes.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/movienotes", movieNotesRoutes);

module.exports = routes;