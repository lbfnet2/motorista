const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota de exemplo para fornecer dados
app.get('/dados', (req, res) => {
    // Aqui você pode adicionar lógica para acessar os dados do Firebase ou de onde quer que você os tenha
    const dados = {
        exemplo: 'dados de exemplo'
    };
    res.json(dados);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
