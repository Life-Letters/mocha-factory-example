// Babel our imports
require('babel-register')();
require('dotenv').config();

var MochaFactory = require('mocha-factory');

MochaFactory.setup({
  testTitle : `${process.env.npm_package_name} - Unit tests - ${process.env.NODE_ENV}`,
  slackHook : process.env.SLACK_DEVELOPMENT_HOOK_URL,
  username: 'Florey',
  channel: '#deployment'
});

// Add your test files
MochaFactory.addFiles('./test/Unit','.spec.js');

// Run the mocha test
MochaFactory.run();
