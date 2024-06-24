const express = require("express")
const app = express()
const port = 3030

app.get("/", (req, res) => {
    res.send("Estas en el Home")
})

app.get("/conocenos", (req, res) => {
    res.send("Estas en Conocenos")
})

app.listen(port, () => {
    console.log(`El servidor ok en el puerto ${port}`);
})

/* 
    CRUD -> METODOS DE HTTP

    CREATE - POST
    READ - GET
    UPDATE - PUT
    DELETE - DELETE

    npm i nodemon -> es para no tener que bajar el server si se actualiza el codigo
    se usa nodemon index.js en consola

*/