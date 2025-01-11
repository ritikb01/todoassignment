const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/integration/Bitcoin Block Suite/bitcoin-block-transaction.spec.js"
    ]
  },
  
});
