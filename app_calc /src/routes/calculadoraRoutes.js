const express = require('express');
const router = express.Router();
const calculadoraControlador = require('../controlador/calculadoraControlador');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.post('/calcular', calculadoraControlador.calcular);

module.exports = router;


