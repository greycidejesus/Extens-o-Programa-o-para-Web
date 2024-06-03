const express = require('express');
const router = express.Router();
const calculadoraControlador = require('../controlador/calculadoraControlador');

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src/views' });
});

router.post('/calcular', calculadoraControlador.calcular);

module.exports = router;

