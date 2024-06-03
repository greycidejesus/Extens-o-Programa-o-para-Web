const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src/views' });
});

router.post('/calcular', calculadoraController.calcular);

module.exports = router;
