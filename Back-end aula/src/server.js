const express = require("express");

const app = express();
app.use(express.json());

// Método GET
app.get("/message", (request, response) => {
    response.send("Hello, world!");
    
});

// Route Params (usados para dados simples)
app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params
    response.send(`
        Mensagem ID: ${id}.
        Para o usuário: ${user}.
    `);
    
});

app.get("/users", (request, response) => {
    const { page, limit } = request.query;
    
    response.send(`Página: ${page}. Mostrar ${limit}`)
    // localhost:3333/users?page=5&limit=10
})

/* app.post("/users", (request, response) => {
    const { name, email, password } = request.body;
    
    response.send(`Usuário: ${name}. E-mail: ${email}. Senha: ${password}`)
   
}) */

app.post("/users", (request, response) => {
    const { name, email, password } = request.body;
    
    response.json({ name, email, password })
   
})




const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}. Link: localhost:${PORT}`));