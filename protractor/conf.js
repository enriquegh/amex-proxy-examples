const proxyURL = 'http://127.0.0.1:8889'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
exports.config = {
    // directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
  
    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['example_spec.js'],
    webDriverProxy: proxyURL,
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };