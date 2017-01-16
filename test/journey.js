const converter = require("selenium-html-js-converter"),
      path = require('path'),
      wdSync = require('wd-sync'),
      fs = require('fs');

// Your test files and export path
const TEST_SCRIPTS_DIR = path.resolve(__dirname, 'Journey/Tests');
const EXPORT_DIR = path.resolve(__dirname, 'Journey/Export')

// Convert your tests
fs.readdir(TEST_SCRIPTS_DIR, (err, files) => {
  files.forEach(file => {
    console.log("converting file : ", file);
    converter.convertHtmlFileToJsFile(`${TEST_SCRIPTS_DIR}\/${file}`, `${EXPORT_DIR}\/${file.split('.')[0]}.js`);
  });
})

// Your list of tests
var list_of_tests = new Array();

// Push all the Exported tests into the array
fs.readdir(EXPORT_DIR, (err, files) => {
  files.forEach(file => {
    const test = require(`${EXPORT_DIR}\/${file}`);
    if(typeof test === 'function') list_of_tests.push(test);
  });
});

// Run the tests
var client = wdSync.remote()
    , browser = client.browser
    , sync = client.sync;

sync(function(){
    browser.init( { browserName: 'phantomjs'} );
    for(var test of list_of_tests){
      test(browser);
    }
    browser.quit();
});

var client2 = wdSync.remote()
    , browser2 = client2.browser
    , sync2 = client2.sync;

// Second browser
sync(function(){
    browser2.init( { browserName: 'phantomjs'} );
    for(var test of list_of_tests){
      test(browser2);
    }
    browser2.quit();
});
