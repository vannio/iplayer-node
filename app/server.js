var express = require('express'),
    browserify = require('browserify-middleware'),
    sass = require('node-sass-middleware'),
    nunjucks = require('nunjucks');
var app = express();
var port = process.env.NODE_ENV === 'test' ? 3000 : 8080;

// Template rendering
var env = nunjucks.configure('./app/views', {
  watch: true,
  express: app
});
env.addGlobal('letters', 'abcdefghijklmnopqrstuvwxyz012345679'.split(''));
app.set('view engine', 'njk');

// Static file routing
app.use(express.static('./app/public'));

// Javascript file bundling
app.use('/scripts/bundle.js', browserify(__dirname + '/models/main.js'));

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

app.get('/programmes/:letter', function(req, res) {
  res.render('programmes/index', { letter: req.params.letter });
});

// Listen for connections
app.listen(port, function () {
  console.log(
    "----------------------------------------\
    \n** Listening on http://localhost:" + port +
    " **\n----------------------------------------\n"
  );
});
