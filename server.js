const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta 'dist'
app.use(express.static('./dist'));

// Qualquer rota que não seja um arquivo estático, redireciona para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
