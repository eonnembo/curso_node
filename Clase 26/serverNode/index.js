const http = require('http')
// import http from "http" "type": "module"

http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    if(req.url == "/") {
        res.end("Estas en el Home")
    } else if (req.url == "/conocenos") {
        res.end("Estas en Conocenos")
    } else {
        res.end("La pagina no existe")
    }
    // res.end("Servidor creado con exito!")
}).listen(3030, "localhost")