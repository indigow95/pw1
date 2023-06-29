var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var mongoURL = 'mongodb+srv://indigow95:isadora@pomodora.k1rzdas.mongodb.net/?retryWrites=true&w=majority'; 
var mensagens = 'mensagens';

// Rota para lidar com o envio do formulário
router.post('/contato', function(req, res, next) {
  var email = req.body.email;
  var senha = req.body.password;
  var mensagem = req.body.mensagem;

  // Cria um objeto com os dados do formulário
  var contato = {
    email: email,
    senha: senha,
    mensagem: mensagem
  };

  // Conecta-se ao banco de dados e insere os dados
  MongoClient.connect(mongoURL, function(err, client) {
    if (err) {
      console.error('Erro ao conectar ao MongoDB:', err);
      return res.render('error', { message: 'Erro interno no servidor' });
    }

    var db = client.db();
    var collection = db.collection(collectionName);

    collection.insertOne(contato, function(err, result) {
      if (err) {
        console.error('Erro ao inserir contato no MongoDB:', err);
        return res.render('error', { message: 'Erro interno no servidor' });
      }

      console.log('Contato inserido no MongoDB:', result.ops[0]);
      res.render('sucesso', { message: 'Mensagem enviada com sucesso!' });
    });
  });
});

module.exports = router;
