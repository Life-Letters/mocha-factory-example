require('babel-register')();
var hook = require('css-modules-require-hook');
var sass = require('node-sass');
var jsdom = require('jsdom').jsdom;

hook({
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
})

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
