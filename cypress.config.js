const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com",
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));

      // Allure
      allureWriter(on, config);
      return config;
    },
  },
  env: {
    allure: true,
    allureResultsPath: "allure-results",
    allureLogCypress: true
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  video: true
});