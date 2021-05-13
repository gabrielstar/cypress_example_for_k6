/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
//const extensionLoader = require('cypress-browser-extension-plugin/loader');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  //`config` is the resolved Cypress config
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.isHeaded) {
      try {
        launchOptions.extensions.push('C:\\Users\\gstarczewski\\Downloads\\phjdhndljphphehjpgbmpocddnnmdbda');
      } catch (error) {
        console.log("extension not available"); //when in headless mode
      }
      return launchOptions;
    }
  })

}
