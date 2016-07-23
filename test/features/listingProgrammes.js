describe('Listing programmes', function(){
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
      expect(browser.url).to.match(/programmes\/[aA]$/);
    });

    it('displays the correct letter at the end of the title', function(){
      expect(browser.text('.programme-list__title')).to.match(/[aA]$/);
    });

    it('displays 20 items or less in the list', function(){
      expect(browser.queryAll('.programme-list__item')).to.have.length.below(21);
    });

  });

});