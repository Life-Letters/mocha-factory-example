var requireHacker = require('require-hacker');

// Dont bother with Static files
const ignoredExtensions = [
  'png',
  'gif',
  'jpg',
  'jpeg',
  'svg'
]

for (var ext of ignoredExtensions){
  requireHacker.hook(ext, () => 'module.exports = ""');
}

require('babel-register')();
var hook = require('css-modules-require-hook');
var sass = require('node-sass');
var jsdom = require('jsdom').jsdom;
var path = require('path');

hook({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    extensions: [ '.scss', '.css' ],
    preprocessCss: (data, filename) =>
      sass.renderSync({
        data,
        file: filename,
      }).css,
});

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
