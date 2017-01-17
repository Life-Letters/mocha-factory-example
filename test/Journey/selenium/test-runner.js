require('dotenv');

// Selenium server remote IP Is set in environment
const SELENIUM_SERVER_REMOTE = process.env.SELENIUM_SERVER_REMOTE || '';

const wdSync = require('wd-sync'),
      client = wdSync.remote(),
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
          test(browser);
          console.log(`Test succeeded : ${test.name}`)
        }
      browser.quit();
      done();
    });

  });
});
