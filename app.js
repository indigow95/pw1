var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var open = require('openurl').open;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registroRouter = require('./routes/registro');

var app = express();

var port = 8080; // Defina a porta desejada

// Abre o navegador automaticamente no endereço localhost:8080
open('http://localhost:8080');

app.listen(port, function() {
  console.log('Servidor Express iniciado na porta ' + port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter)
app.use('/registro', registroRouter);




// catch 404 and forward to error