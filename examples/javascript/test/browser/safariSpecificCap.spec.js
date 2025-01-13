const safari = require('selenium-webdriver/safari');
const {Browser, Builder} = require("selenium-webdriver");
const options = new safari.Options();
const process  =  require('node:process');

describe('Should be able to Test Command line arguments', function () {
  (process.platform === 'darwin' ? it : it.skip)('headless', async function () {
    let driver = new Builder()
      .forBrowser(Browser.SAFARI)
      .setSafariOptions(options)
      .build();

    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    await driver.quit();
  });
});

describe('Should be able to enable Safari logging', function () {
  this.timeout(15000); 
  (process.platform === 'darwin' ? it : it.skip)('enableLogs', async function () {
    const options = new safari.Options()
      .setLoggingPrefs({ browser: 'ALL' }); // Enable browser-level logging

   let driver = new Builder()
      .forBrowser(Browser.SAFARI)
      .setSafariOptions(options)
      .build();

    try {
      await driver.get('https://www.selenium.dev/');
    } finally {
      await driver.quit();
    }
  });
});