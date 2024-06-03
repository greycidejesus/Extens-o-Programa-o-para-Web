const calculadora = require('../calculadora/calculadora');
const path = require('path');

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'), { error: 'Por favor, insira valores numéricos válidos.' });
        return;
    }

    const resultado = calculadora.calcular(parseFloat(num1), parseFloat(num2), operacao);
    const resultadoHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Resultado</title>
        </head>
        <body>
            <h1>Resultado</h1>
            <p>O resultado da operação é: ${resultado}</p>
            <a href="/">Voltar</a>
        </body>
        </html>
    `;
    res.send(resultadoHtml);
};

