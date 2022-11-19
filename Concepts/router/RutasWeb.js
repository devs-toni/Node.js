const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
/*     res.send("Mi respuesta desde express v2");
 */    res.render('index', { titulo: 'mi titulo dinamico' })
});

router.get('/services', (req, res) => {
    res.render('services', { titulo: 'mis servicios' });
});

module.exports = router;