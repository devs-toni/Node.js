const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.end("Mi respuesta desde express v2");
});

app.get('/services', (req, res) => {
    res.end('Estas en la página de servicios');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log('Servidor encendido en el puerto', port);
});