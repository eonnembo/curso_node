
const {Sequelize} = require("sequelize")

// nombre de tu base de datos, users, contraseña, donde esta alojada la db, en que lenguaje esta la db, en que puerto la db
const db = new Sequelize("posteos", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = db