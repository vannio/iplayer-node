var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
  res.send('Welcome to the root route, yay!');
});

app.listen(port, function () {
  console.log('Something should be happening on http://localhost:' + port);
});
