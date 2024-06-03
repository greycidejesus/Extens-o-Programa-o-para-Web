const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
  const { num1, num2, operacao } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    res.sendFile('index.html', { root: 'src/views' }, { error: 'Por favor, insira valores numéricos válidos.' });
    return;
  }

  const resultado = calculadora.calcular(parseFloat(num1), parseFloat(num2), operacao);
  res.render('resultado.html', { resultado });
};
