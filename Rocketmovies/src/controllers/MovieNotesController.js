const knex = require("../database/knex");

/**
 * "title": "Introdução ao Nodejs",  
 * "descriptions": "Essa é uma nota de exemplo",
 * "tags": ["node", "express"]
 */ 
 
class MovieNotesController {
    async create(request, response) {

        // Nota: tem que ser igual ao que foi colocado em migrations
        const { title, descriptions, rating, tags } = request.body;
        const { user_id } = request.params;
 
        const [ note_id ] = await knex("movie_notes").insert({
            title,
            descriptions,
            rating,
            user_id
        });

        const tagsInsert = tags.map(name => {
            return {
                note_id, 
                name,
                user_id
            }
        });

        await knex("movie_tags").insert(tagsInsert);

       return response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const notes = await knex("movie_notes").where({ id }).first();
        const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name");

        return response.json({
            ...notes,
            tags
        });

    }

    async delete(request, response) { 
        const { id } = request.params;

        await knex("movie_notes").where({ id }).delete();

        return response.json();

    }

    async index(request, response) {
        const { title,  user_id, tags } = request.query;

        let notes;

        if (tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());
            console.log(filterTags)

            notes = await knex("movie_tags")
            .select([
                "notes.id",
                "notes.title",
                "notes.user_id",
            ])
            .where("notes.user_id", user_id)
            .whereLike("notes.title", `%${title}%`)
            .whereIn("name", filterTags) 
            .innerJoin("notes", "notes.id", "tags.note_id")
            .orderBy("notes.title")

        } else {
            // somente a nota desse usuário
                notes = await knex("movie_notes")
                    .where({ user_id })
                    .whereLike("title", `%${title}%`)
                    .orderBy("title");
            }


        const userTags = await knex("movie_tags").where({ user_id })
        const notesWithTags = await notes.map(note  => {
            const notesTags = userTags.filter(tag => tag.note_id === note.id)

            return {
                ...note, 
                tags: notesTags
            }
        })

        return response.json(notesWithTags)
    }

}

module.exports = MovieNotesController;