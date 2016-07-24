var express = require('express'),
    request = require('request');

var router = express.Router();

router.get('/', function(req, res){
  res.redirect('/programmes/a');
});

router.get('/:letter', function(req, res) {
  var letter = req.params.letter.toLowerCase(),
      page = req.query.page ? '?page=' + req.query.page : '';

  var baseUrl = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/',
      requestUrl = baseUrl + letter + '/programmes' + page;

  request(requestUrl, function(err, response, body) {
    var responseData;

    if (err) responseData = { error: err };
    else {
      var data = JSON.parse(body).atoz_programmes;
      var pages = data.count > data.per_page ? Math.ceil(data.count / data.per_page) : 1;

      responseData = {
        currentLetter: letter,
        currentPage: req.query.page,
        data: data,
        pages: pages
      };
    }

    res.render('programmes/index', responseData);
  });
});

module.exports = router;
