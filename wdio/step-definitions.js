/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */

 const { Given, When, Then } = require('cucumber')

 Given(/^I go on the website "([^"]*)"$/, (url) => {
     browser.url(url)
 })
 
 
 Then(/^should the element "([^"]*)" be (\d+)px wide and (\d+)px high$/, (selector, width, height) => {
     var elemSize = $(selector).getSize()
     expect(elemSize.width).toBe(width)
     expect(elemSize.height).toBe(height)
 })
 
 Then(/^should the title of the page be "([^"]*)"$/, (expectedTitle) => {
     expect(browser).toHaveTitle(expectedTitle)
 })

 