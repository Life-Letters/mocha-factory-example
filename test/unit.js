// Babel our imports
require('babel-register')();
require('dotenv');

var MochaFactory = require('mocha-factory');

MochaFactory.setup({
  testTitle : `${process.env.npm_package_name} - Unit tests`,
  slackHook : process.env.SLACK_DEVELOPMENT_HOOK_URL,
  username: 'Florey',
  channel: '#deployment'
});

// Add your test files
MochaFactory.addFiles('./test/Unit','.js');

// Run the mocha test
MochaFactory.run();
