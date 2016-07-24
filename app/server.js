var express = require('express'),
    sass = require('node-sass-middleware'),
    nunjucks = require('nunjucks');

var app = express();
var port = process.env.NODE_ENV === 'test' ? 3000 : 8080;

app.set('view engine', 'njk');

var env = nunjucks.configure(__dirname + '/views', {
  watch: true,
  express: app
});

var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letters.push('0-9');

env.addGlobal('letters', letters);
env.addGlobal('siteTitle', 'A-Z of TV Programmes');

app.use(sass({
  src: __dirname + '/sass',
  dest: __dirname + '/public',
  outputStyle: 'compressed'
}));

app.use(express.static(__dirname + '/public'));

app.use('/', require(__dirname + '/controllers/main'));
app.use('/programmes', require(__dirname + '/controllers/programmes'));

app.listen(port, function () {
  console.log(
    " ----------------------------------------\
    \n ** Listening on \x1b[36mhttp://localhost:" + port +
    "\x1b[0m **\n ----------------------------------------\n"
  );
});
