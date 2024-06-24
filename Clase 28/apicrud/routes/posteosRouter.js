const express = require("express")
const router = express.Router()

const {traerPosteos, traerUnPosteo} = require("../controllers/posteosControllers")

// Todos los posteos 
router.get("/", traerPosteos)

// Busco un posteo por id
router.get("/:id", traerUnPosteo)

// Creo un posteo
router.post("/", (req, res) => {
    res.send("Tomó lo que viaja en el req.body y lo guardó en DB")
})

// Modifico un posteo
router.put("/:id", (req, res) => {
    res.send("Buscó el posteo, tomó lo que viaja en el req.body y lo actualizó con lo que se guardó en la DB")
})

// Elimino un posteo
router.delete("/posteos/:id", (req, res) => {
    res.send("Eliminó el posteo de la DB")
})

module.exports = router