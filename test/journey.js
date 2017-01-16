// Babel our imports
require('babel-register')();

// Serve our app
var server = require('../server.js');
var MochaFactory = require('mocha-factory');

// Add each .js file to the mocha instance
MochaFactory.addFiles('./test/Journey/JsTests','.js');

// Run the mocha test
MochaFactory.run();

// Gotta close the server
MochaFactory.mocha.suite.afterAll( function() {
  server.close();
});
