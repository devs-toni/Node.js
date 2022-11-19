const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view')

app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render('404', {titulo: 'Error!!!'});
});

app.listen(port, () => {
    console.log('Servidor encendido en el puerto', port);
});