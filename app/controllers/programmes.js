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
    var responseData = {
      siteTitle: 'A-Z of TV Programmes',
      letters: 'abcdefghijklmnopqrstuvwxyz'.split('').concat('0-9'),
      recipe: {
        small: '192x108',
        medium: '406x228',
        large: '560x315'
      }
    }

    if (err) Object.assign(responseData, { error: err });
    else {
      var data = JSON.parse(body).atoz_programmes;
      var pages = countPages(data);

      Object.assign(responseData, {
        currentLetter: letter,
        currentPage: req.query.page,
        data: data,
        pages: pages
      });
    }

    res.render('programmes/index', responseData);
  });
});

function countPages(data){
  return data.count > data.per_page ? Math.ceil(data.count / data.per_page) : 1;
}

module.exports = router;
