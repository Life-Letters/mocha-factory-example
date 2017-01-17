require('dotenv').config();

const wdSync = require('wd-sync'),
      colors = require('colors/safe'),
      client = wdSync.remote(process.env.SELENIUM_SERVER_REMOTE),
      fs = require('fs'),
      path = require('path'),
      browser = client.browser,
      sync = client.sync,
      mocha = require('mocha'),
      MochaFactory = require('mocha-factory');

// Your test files and export path
const TEST_SCRIPTS_DIR = path.resolve(__dirname);
const EXPORT_DIR = path.resolve(__dirname, '../export');
const testList = MochaFactory.convertHtmlFileToJsFile(TEST_SCRIPTS_DIR,EXPORT_DIR);

describe('Selenium tests - made by IDE', function() {
  it("Runnign IDE tests" , function(done) {

    // Biggest Hack ever - this is actually max it will allow
    this.timeout(999999999);

    sync(function(){
      browser.init( { browserName: 'phantomjs'} );
        for(var testfile of testList){
          const test = require(testfile);
          console.log(`Test Begin : ${test.name}`);
          test(browser);
          console.log(colors.green(`Test Pass✓ : ${test.name}`));
        }
      browser.quit();
      done();
    });

  });
});
