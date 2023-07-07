const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);


module.exports = notesRoutes;

/*

{
	"title": "Introdução Nodejs",
	"description": "Essa é uma nota de exemplo.",
	"tags": ["node", "express"],
	"links": ["link1", "link2"]
	
}

*/