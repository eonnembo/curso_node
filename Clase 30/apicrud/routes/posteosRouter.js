const express = require("express")
const router = express.Router()

const { traerPosteos, traerUnPosteo, crearPosteo, modificarPosteo, eliminarPosteo } = require("../controllers/posteosControllers")

// Todos los posteos 
router.get("/", traerPosteos)

// Busco un posteo por id
router.get("/:id", traerUnPosteo)

// Creo un posteo
router.post("/", crearPosteo)

// Modifico un posteo
router.put("/:id", modificarPosteo)

// Elimino un posteo
router.delete("/:id", eliminarPosteo)

module.exports = router