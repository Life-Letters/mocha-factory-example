// Babel our imports
require('babel-register')();

var MochaFactory = require('mocha-factory');

// Add your test files
MochaFactory.addFiles('./test/Unit','.js');

// Run the mocha test
MochaFactory.run();
