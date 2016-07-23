var express = require('express'),
    browserify = require('browserify-middleware'),
    sass = require('node-sass-middleware'),
    nunjucks = require('nunjucks'),
    request = require('request');

var app = express();
var port = process.env.NODE_ENV === 'test' ? 3000 : 8080;

// Template rendering
app.set('view engine', 'njk');

var env = nunjucks.configure('./app/views', {
  watch: true,
  express: app
});

var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letters.push('0-9');

env.addGlobal('letters', letters);

// Static file routing
app.use(express.static('./app/public'));

// Javascript file bundling
// app.use('/scripts/bundle.js', browserify(__dirname + '/models/main.js'));

// Sass compiling
app.use(sass({
  src: __dirname + '/sass',
  dest: __dirname + '/public',
  outputStyle: 'compressed'
}));

// Routes
app.get('/', function (req, res) {
  res.render('index')
});

app.get('/programmes/:letter', function(req, response) {
  var letter = req.params.letter;

  var baseUrl = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/',
      requestUrl = baseUrl + letter + '/programmes';

  request(requestUrl, function(err, res, body) {
    var data = JSON.parse(body).atoz_programmes;

    response.render('programmes/index', {
      letter: letter,
      data: data
    });
  });
});

// Listen for connections
app.listen(port, function () {
  console.log(
    " ----------------------------------------\
    \n ** Listening on \x1b[36mhttp://localhost:" + port +
    "\x1b[0m **\n ----------------------------------------\n"
  );
});
