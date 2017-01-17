require('dotenv');

const wdSync = require('wd-sync'),
      client = wdSync.remote(),
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
  it("Tests" , function() {

    sync(function(){
      browser.init( { browserName: 'phantomjs'} );
        for(var testfile of testList){
          const test = require(testfile);
          test(browser);
          console.log(`Test succeeded : ${test.name}`)
        }
      browser.quit();
    });

  });
});
