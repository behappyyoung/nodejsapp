/**
 * Created by youngsug on 5/6/2016.
 */
// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['local-spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
    /*
     multiCapabilities: [{
     browserName: 'firefox'
     }, {
     browserName: 'chrome'
     }]
     */
}