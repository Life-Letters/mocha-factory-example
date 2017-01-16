import { expect } from 'chai';
import webdriver from 'selenium-webdriver';

// Setup Webdrivers
var By = webdriver.By,
    until = webdriver.until;

var googleWindow = new webdriver.Builder()
    .forBrowser('phantomjs')
    .build();

var appleWindow = new webdriver.Builder()
    .forBrowser('phantomjs')
    .build();

// Write the tests
describe("Testing Component", function() {

  // UI tests are slow especially with this internet
  this.timeout(10000);

  it("Goes to google", function(done) {
    // Just normal Javascript tests NOT RECOMMENDED
    googleWindow.get('http://www.google.com');
    googleWindow.wait(until.titleIs('Google'), 5000);

    // Use a Chai expect
    googleWindow.getTitle().then(function(title) {
      expect(title).to.equal('Google');
      done();
    });

    googleWindow.quit();
  });

  it("Goes to Apple", function(done){
    // Multi browser
    appleWindow.get('http://www.apple.com');
    appleWindow.wait(until.titleIs('Apple'),5000);
    appleWindow.getTitle().then(function(title) {
      expect(title).to.equal('Apple');
      done();
    });
  });

  xit("Ignored test", function(done){
    // Multi browser
    appleWindow.get('http://www.apple.com');
    appleWindow.wait(until.titleIs('Apple'),5000);
    appleWindow.getTitle().then(function(title) {
      console.log(title);
      expect(title).to.equal('Not Apple');
      done();
    });
    appleWindow.quit();
  });

});
