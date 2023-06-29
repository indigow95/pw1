var express = require('express');
var router = express.Router();

// Rota GET para exibir a tela de registro
router.get('/', function(req, res, next) {
  res.render('registro'); // Renderiza o arquivo registro.ejs
});

// Rota POST para processar o formulário de registro
router.post('/', function(req, res, next) {
  // Aqui você pode adicionar a lógica para processar os dados do formulário de registro
  // e realizar qualquer ação necessária, como salvar os dados no banco de dados.

  // Redireciona o usuário para outra página após o registro
  res.redirect('/registro');
});

module.exports = router;