const database = require("./database/sqlite");
const express = require("express");

const app = express();
app.use(express.json());

database();

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}. Link: localhost:${PORT}`))