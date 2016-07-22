var app = require('../../app/server.js');

describe('Letter index page', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  context('Clicking "A" in the navigation', function(){
    before(function(done){
      browser.visit('/', function(){
        browser.clickLink('a', done);
      });
    });

    it('should redirect to the correct path', function(){
      expect(browser.url).to.match(/programmes\/a$/);
    });

    it('should show the correct letter at the end of the title', function(){
      expect(browser.text('h2')).to.match(/a$/);
    });
  });
});
