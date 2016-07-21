var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var port = process.env.NODE_ENV === 'test' ? 3000 : 8080;
var nunjucks = require('nunjucks');

var env = nunjucks.configure('./app/views', {
  watch: true,
  express: app
});

env.addGlobal('letters', 'abcdefghijklmnopqrstuvwxyz012345679'.split(''));

app.set('view engine', 'njk');

//provide browserified versions of all the files in a directory
app.use('/scripts/main.js', browserify(__dirname + '/scripts/main.js'));

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/programmes/:letter', function(req, res) {
  res.render('programmes/index', { letter: req.params.letter });
});

app.listen(port, function () {
  console.log('Something should be happening on http://localhost:' + port);
});
