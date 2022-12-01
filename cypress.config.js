const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  projectId: "as9wiv",
  viewportWidth: 1920,
  viewportHeight: 1080,


  e2e: {
    baseUrl: "https://cozyhome-stage-omni.dclouds.ru",
    //baseUrl: "https://cozyhome.ru/",
    setupNodeEvents(on, config) {
    }
    /*    "blockHosts": [
          "www.googletagmanager.com",
          "mc.yandex.ru",
          "www.google.com"
        ]*/
  }


});
