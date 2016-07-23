var app = require('../../app/server.js');

describe('Letter index page', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  context('Clicking "A" in the navigation', function(){
    beforeEach(function(done){
      browser.visit('/', function(){
        browser.clickLink('.navigation-list a', done);
      });
    });

    it('redirects to the correct path', function(){
      expect(browser.url).to.match(/programmes\/a$/);
    });

    it('displays the correct letter at the end of the title', function(){
      expect(browser.text('h2')).to.match(/a$/);
    });

    it('displays 20 items or less in the list', function(){
      expect(browser.queryAll('.programme-list__item').length).to.be.below(21);
    });

  });

});
