describe('Routing URLs', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  context('On the "root" route', function(){
    beforeEach(function(next){
      browser.visit('/', next);
    });

    it('redirects to the list of "A" programmes', function(){
      expect(browser.url).to.match(/programmes\/[aA]$/);
    });
  });

  context('Clicking "C" in the navigation', function(){
    beforeEach(function(done){
      browser.clickLink('.navigation-list li:nth-child(3) a', done);
    });

    it('takes user to the list of "C" programmes', function(){
      expect(browser.url).to.match(/programmes\/[cC]$/);
    });
  });
});
