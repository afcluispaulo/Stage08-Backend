const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController.js");

const movieTagsRoutes = Router();

const movietagsController = new MovieTagsController();

movietagsController.get("/:user_id", tagsController.index);

module.exports = movieTagsRoutes;