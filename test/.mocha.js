require('./.setup.js');
require('dotenv').config();

var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

// Integrate with Slack if available
if(process.env.SLACK_DEVELOPMENT_HOOK_URL){
  mocha.reporter('mocha-ci-slack-reporter',{
    url: process.env.SLACK_DEVELOPMENT_HOOK_URL,
    username: `${process.env.npm_package_name}(${process.env.ENV_TYPE})`,
    channel: '#deployment',
    logsUrl: 'https://ci.com/project/...'
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
