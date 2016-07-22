var $ = require('jquery');
var baseUri = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/';

module.exports = function(letter) {
  $.ajax({
    url: baseUri + letter + '/programmes',
    success: function(data){
      data = data.atoz_programmes.elements;
    }
  });
};
