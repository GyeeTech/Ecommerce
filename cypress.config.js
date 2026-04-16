const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://import-automation-pr-rxox.bolt.host',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add delay between commands (in ms)
    },
  },
  viewportWidth: 1580,
  viewportHeight: 1120
});
