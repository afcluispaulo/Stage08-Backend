require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const express = require("express");
const routes = require("./routes/");

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}. Link: localhost:${PORT}`))