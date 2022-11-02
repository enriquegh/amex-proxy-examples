exports.config = {

    /**
     * specify test files
     */
    specs: [
        __dirname + '/features/*.feature'
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'debug',
    framework: 'cucumber',

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    services: ['sauce'],

    reporters: ['spec'],

    cucumberOpts: {
        require: [__dirname + '/step-definitions.js']
    }
}
