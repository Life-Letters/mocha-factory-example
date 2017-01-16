# Example testing structure

Example projects how to test various things. We use Enzyme/Mocha/Chai/Karma/Jasmine/PhantomJs for this

As an overview theres 3 types of tests, They can be ran with the following commands:

```
  npm run test:unit
  npm run test:journey
  npm run test:journey-js

  // With watch
  npm run watch:test:unit
  npm run watch:test:journey
  npm run watch:test:journey-js
```

If you fancy OSX notifications install the notifier :

```
sudo gem install terminal-notifier
```

Some environment variables are expected. Optional is marked with <OPTIONAL_...> else its required. For development make a '.env' file in root:  
For this Project we use port 3999 and the journey test scripts assume that port

```
  NODE_ENV="local"
  PORT="3999"
  SLACK_DEVELOPMENT_HOOK_URL="<OPTIONAL_URL>"
```

Look at these files to see how to set them up in your own Project

```
  test/journey-js.js
  test/journey.js
  test/unit.js
```

## Unit, Classes, React Components

These tests are in the test/Unit folder. They are a mix of Class/Function/Component level tests.
Please note you must import the scss files in your tests.

[Enzyme api docs](http://airbnb.io/enzyme/docs/api/index.html)

```
npm run watch:test
```

## Journey Testing

Testing UI from a browser perspective using Selenium/Chrome/PhantomJs/Selenum-webdriver  
Note: You must install the correct webdrivers please refer here [link](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)  
ChromeDriver: You then need to unzip the package and then copy the file to /usr/local/bin

Also Install selenium-standalone [link](https://www.npmjs.com/package/selenium-standalone)

Install Selenium IDE for easier test generation [link](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)

Run script

```
  npm run test:journey
```

##### Selenium Script formats

Because the Selenium RC doesnt even accept Javascript its a bit awkward working with Javascript testing scripts.

Therefore it is recommended you write the test in HTML and run it with Selenium-Html-js-converter. Btw you need selenium-standalone installed
[link](https://www.npmjs.com/package/selenium-html-js-converter)  

If you still want to run js tests theres also an example

```
npm run test:journey-js
```

## Serving the test app

This serves the actual react app

```
  npm run build
  npm run serve (builds AND serve/watch)
```

## Deployment

The app confirms to heroku deployment stucture, with the root Procfile and 'postinstall' build script.

Simply mirror any environment variables in heroku and it should behave as expected.

## TODO

Find a way to exit the process cleanly after its finished journey

## Other supporting docs/examples

Not all of these are implemented in the test examples but might be useful one day  

- General Stubbing and testing  
http://brewhouse.io/2016/03/18/accelerate-your-react-testing-with-enzyme.html  
http://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/

- Async / Await es7  
https://github.com/lalitkapoor/node-pg-util/blob/master/src/test.js  

- Chai Promises 'eventually'  
http://chaijs.com/plugins/chai-as-promised/
