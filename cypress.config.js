const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
        env: {
            allureReuseAfterSpec: true
        },

        baseUrl: "https://demoqa.com",
        supportFile: 'tests/support/e2e.js',
        specPattern: 'tests/spec/**/*.js',
        videosFolder: 'tests/videos',
        downloadsFolder: 'tests/downloads',
        screenshotsFolder: 'tests/screenshots',
        fixturesFolder: 'tests/fixtures',

        testIsolation: false,
    }
});



