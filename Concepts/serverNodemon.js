const { appendFile } = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    console.log('Respues del servidor ... ');
    response.end('Estoy respondiendo a tu solicitud v3');
});

const port = 3000;
server.listen(port, () => {
    console.log('Escuchando solicitud');
});
