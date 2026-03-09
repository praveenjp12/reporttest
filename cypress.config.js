const { defineConfig } = require("cypress");
const { setupJsonHtmlReporterEvents } = require("cypress-json-html-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-json-html-reporter",
    reporterOptions: {
      outputFile: "reports/test-report.json",
      screenshotOption: "always"
    },
    video: true,
    screenshotsFolder: "reports/screenshots",
    videosFolder: "reports/videos",
    setupNodeEvents(on, config) {
      // Connect the reporter's plugin events
      setupJsonHtmlReporterEvents(on, config);
    },
  },
});