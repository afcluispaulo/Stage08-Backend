const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;
 
/*
{
	"title": "Introdução Nodejs",
	"description": "Essa é uma nota de exemplo.",
	"tags": ["node", "express"],
	"links": ["link1", "link2"]	
}
*/