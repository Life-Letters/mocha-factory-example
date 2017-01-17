require('dotenv');

const converter = require("selenium-html-js-converter"),
      path = require('path'),
      wdSync = require('wd-sync'),
      fs = require('fs'),
      client = wdSync.remote(),
      browser = client.browser,
      sync = client.sync,
      mocha = require('mocha');

// Your test files and export path
const TEST_SCRIPTS_DIR = path.resolve(__dirname);
const EXPORT_DIR = path.resolve(__dirname, '../Export')

// Convert your tests
fs.readdir(TEST_SCRIPTS_DIR, (err, files) => {
  files.forEach(file => {
    if(file.substr(-5) === '.html'){
      console.log('converting', file);
      converter.convertHtmlFileToJsFile(`${TEST_SCRIPTS_DIR}\/${file}`, `${EXPORT_DIR}\/${file.split('.')[0]}.js`);
    }
  });
});

// Your list of tests
var list_of_tests = new Array();

// Push all the Exported tests into the array
fs.readdir(EXPORT_DIR, (err, files) => {
  files.forEach(file => {
    const test = require(`${EXPORT_DIR}\/${file}`);
    if(typeof test === 'function') list_of_tests.push(require(`${EXPORT_DIR}\/${file}`));
  });
});


describe('Selenium tests - made by IDE', function() {
  sync(function(){
      browser.init( { browserName: 'phantomjs'} );
      for(var test of list_of_tests){
        it(test.name , function() {
          test(browser);
        });
      }
      browser.quit();
  });
});