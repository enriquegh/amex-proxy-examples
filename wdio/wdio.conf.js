require('global-agent/bootstrap')
process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://127.0.0.1:8889'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
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
