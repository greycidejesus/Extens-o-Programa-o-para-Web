const express = require('express');
const app = express();
const port = 3000;

const calculadoraRotas = require('./src/rotas/calculadoraRotas');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', calculadoraRotas);

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
