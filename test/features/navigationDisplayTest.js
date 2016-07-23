describe('Navigation display', function(){
  var browser;

  before(function(next){
    browser = new Browser({ site: 'http://localhost:3000' });
    next();
  });

  before(function(done){
    browser.visit('/', done);
  });

  it('displays an alphabetical list of letters (a-z then 0-9)', function(){
    expect(browser.text('nav li:first-child')).to.contain('a');
    expect(browser.text('nav li:nth-child(26)')).to.contain('z');
    expect(browser.text('nav li:nth-child(27)')).to.equal('0-9');
  });
});
