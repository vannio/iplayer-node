describe('Letter index page', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  before(function(done){
    browser.visit('/', function(){
      browser.clickLink('a', done);
    });
  });

  it('should show the letter "a" at the end of the title', function(){
    expect(browser.text('h2')).to.match(/a$/);
  });

  it('should show programmes beginning with "a"', function(){
    expect(browser.text('#js-programmes-list li:first-child')).to.match(/^a/);
    expect(browser.text('#js-programmes-list li:last-child')).to.match(/^a/);
  });
});
