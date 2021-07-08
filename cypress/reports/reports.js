const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name": "Desafio Chapter 01",
        "Test Environment": "CI",
        "Browser": "Electron",
        "Platform": "Mac",
        "Executed": "Local"
    }
};

reporter.generate(options);