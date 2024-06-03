const express = require('express');
const app = express();
const port = 3000;

const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', calculadoraRoutes);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
