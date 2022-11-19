const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: '1', nombre: 'Jackie', descripcion: 'descripcion Jackie'},
            {id: '2', nombre: 'Rex', descripcion: 'descripcion Rex'},
            {id: '3', nombre: 'Chan', descripcion: 'descripcion Chan'}
        ]
    });
});

module.exports = router;