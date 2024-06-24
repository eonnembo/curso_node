const traerPosteos = (req, res) => {
    res.send("Busco los posteos de la DB y los envio en .JSON")
}

const traerUnPosteo = (req, res) => {
    res.send("Busco el posteo en la DB y los envio en .JSON")
}

module.exports = {traerPosteos, traerUnPosteo}