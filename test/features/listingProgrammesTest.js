describe('Listing programmes', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  beforeEach(function(next){
    browser.visit('/', next);
  });

  context('On the "A" programmes listing', function(){
    it('displays the letter "A" at the end of the title', function(){
      expect(browser.text('.programme-list__title')).to.match(/[aA]$/);
    });

    it('displays 20 items or less in the list', function(){
      expect(browser.queryAll('.programme-list__item')).to.have.length.below(21);
    }); 
  });

});
