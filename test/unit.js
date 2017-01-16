// Babel our imports
require('babel-register')();

// Import the Mocha Factory which exposes the mocha instance and a run() method
var MochaFactory = require('./.MochaFactory.js');

// Add your test files
MochaFactory.addFiles('./test/Unit','.js');

// Run the mocha test
MochaFactory.run();
