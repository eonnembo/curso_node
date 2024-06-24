const http = require('http'); //Modulo nativo

http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"})
    res.end("Servidor creado con Nodejs") // Contenido en texto plano
}).listen(3030, "localhost") // puerto: 3030 y origen del servidor es local