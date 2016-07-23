describe('Pagination', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  before(function(next){
    browser.visit('/programmes/a', next);
  });

  it('is implicitly on "page 1" by default', function(){
    var defaultContent = browser.text('body');

    browser.visit('/programmes/a?page=1', function(){
      expect(browser.text('body')).to.equal(defaultContent);
    });
  });
});
