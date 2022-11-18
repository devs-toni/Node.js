const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
/*     res.send("Mi respuesta desde express v2");
 */
        res.render('index', {titulo: 'mi titulo dinamico'})        
});

app.get('/services', (req, res) => {
    res.render('services', {titulo: 'mis servicios'});
});

app.use((req, res, next) => {
    res.status(404).render('404', {titulo: 'Error!!!'});
});


app.listen(port, () => {
    console.log('Servidor encendido en el puerto', port);
});