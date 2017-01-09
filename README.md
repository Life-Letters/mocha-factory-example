# Example testing structure

Example projects how to test various things

## React Components

Testing react components using Enzyme/Mocha/Chai refer to /test/Components folder

[Enzyme api docs](http://airbnb.io/enzyme/docs/api/index.html)

## Classes

Testing JS es6 Classes using Mocha/Chai. Refer to /test/Classes

## Unit (Generic/Integration)

Testing JS generic js functions using Mocha/Chai. Refer to /test/Unit

## Journey Testing

Testing UI from a browser perspective using Selenium/Chrome/PhantomJs/Selenum-webdriver  
Note: You must install the correct webdrivers please refer here [link](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)  
ChromeDriver: You then need to unzip the package and then copy the file to /usr/local/bin

Also Install selenium-standalone [link](https://www.npmjs.com/package/selenium-standalone)

Install Selenium IDE for easier test generation [link](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)

Run script

```
  npm run journey
```

##### Selenium Script formats

Because the Selenium RC doesnt even accept Javascript its a bit awkward working with Javascript testing scripts.

Therefore it is recommended you write the test in HTML and run it with Selenium-Html-js-converter. Btw you need selenium-standalone installed
[link](https://www.npmjs.com/package/selenium-html-js-converter)  

If you still want to run js tests theres also an example

```
 npm run journey-js
```

## Serving the test app

There are a few commands

```
  npm run build
  npm run watch
  npm run serve
```

## TODO

Find a way to exit the process cleanly after its finished
