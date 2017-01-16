// Babel our imports
require('babel-register')();

// Serve our app
var server = require('../server.js');

// Import the Mocha Factory which exposes the mocha instance and a run() method
var MochaFactory = require('./.MochaFactory.js'),
    fs = require('fs'),
    path = require('path');

// Add each .js file to the mocha instance
MochaFactory.addFiles('./test/Journey/JsTests','.js');

// Run the mocha test
MochaFactory.run();

// Gotta close the server
MochaFactory.mocha.suite.afterAll( function() {
  server.close();
});
