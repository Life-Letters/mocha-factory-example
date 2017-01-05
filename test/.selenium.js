var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var googleWindow = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var appleWindow = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// Just normal Javascript tests NOT RECOMMENDED
googleWindow.get('http://www.google.com');
googleWindow.wait(until.titleIs('Google'), 5000);
googleWindow.quit();

// Multi browser
appleWindow.get('http://www.apple.com');
appleWindow.wait(until.titleIs('Apple'),5000);
appleWindow.quit();
