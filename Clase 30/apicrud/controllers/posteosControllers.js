const posteosModel = require("../models/posteosModel.js")


// CRUD - (CREAT - READ - UPDATE - DELETE)

// Traer todos los Posteos
const traerPosteos = async (req, res) => {
    try {
        const posteos = await posteosModel.findAll()
        res.json(posteos)
    } catch (error) {
        res.json({ mensaje: error.message })
    }
}

// Traer un Posteo
const traerUnPosteo = async (req, res) => {
    try {
        // const postId = req.params.id; // Obtén el ID del posteo desde los parámetros de la ruta
        // const posteoEncontrado = await posteosModel.findOne({
        //   where: { id: postId }, // Busca por ID
        // });
        const posteoEncontrado = await posteosModel.findByPk(req.params.id);
        if (!posteoEncontrado) {
            return res.status(404).json({ mensaje: 'Posteo no encontrado' });
        }

        res.json(posteoEncontrado); // Envía el posteo como respuesta en formato JSON
    } catch (error) {
        console.error('Error al buscar el posteo:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// Crear Posteo
const crearPosteo = async (req, res) => {
    try {
        const nuevoPosteo = await posteosModel.create(req.body)
        res.status(201).json(nuevoPosteo)
    } catch (error) {
        console.error('Error al crear el posteo:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Modificar Posteo
const modificarPosteo = async (req, res) => {
    try {
        const modificaPosteo = await posteosModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(201).json({ mensaje: "Se actualizó el posteo" })
    } catch (error) {
        console.error('Error al modificar el posteo:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Eliminar Posteo
const eliminarPosteo = async (req, res) => {
    try {
        const posteoEncontrado = await posteosModel.findByPk(req.params.id);
        if (!posteoEncontrado) {
            return res.status(404).json({ mensaje: 'Posteo no encontrado' });
        }
        await posteoEncontrado.destroy()
        res.json({ mensaje: 'Posteo eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el posteo:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

module.exports = { traerPosteos, traerUnPosteo, crearPosteo, modificarPosteo, eliminarPosteo }