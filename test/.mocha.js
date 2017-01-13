require('./.setup.js');
require('dotenv').config();

var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

console.log(process.env);

// Integrate with Slack if available
if(process.env.SLACK_DEVELOPMENT_HOOK_URL){
  mocha.reporter('mocha-ci-slack-reporter',{
    testTitle: `${process.env.npm_package_name}(${process.env.NODE_ENV}) - Unit tests`
    url: process.env.SLACK_DEVELOPMENT_HOOK_URL,
    username: `Heroku-Florey`,
    channel: '#deployment'
  });
}

var testDir = './test/Unit'

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});

// Run the tests.
mocha.growl().run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});
