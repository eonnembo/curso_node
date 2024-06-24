const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")

const posteosRouter = require("./routes/posteosRouter.js")
const db = require("./data/db.js")

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Estas en el Home")
})

app.use("/posteos", posteosRouter)

//Conexión a la DB
const conexiondb = async() => {
    try {
        await db.authenticate()
        console.log("😏 ~ conexiondb ~ Conexión OK a la DB")
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}

app.listen(PORT, () => {
    conexiondb()
    console.log(`El servidor ok en el puerto ${PORT}`);
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