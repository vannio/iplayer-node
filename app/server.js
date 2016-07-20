var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var port = 3000;

app.set('view engine', 'nunjucks');
nunjucks.configure('./app/views', {
  watch: true,
  express: app
});

app.get('/', function (req, res) {
  var letters = 'abcdefghijklmnopqrstuvwxyz012345679'.split('');
  res.render('index', { letters: letters })
});

app.listen(port, function () {
  console.log('Something should be happening on http://localhost:' + port);
});