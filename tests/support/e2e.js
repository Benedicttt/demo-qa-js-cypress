import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';
import {allure} from "./helpers";

const config = Cypress.config()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

allure.severity("critical")
before('Open main page', () => {
    cy.visit("/")
})

allure.severity("critical")
before('base url from config equal', () => {
    expect(config).to.have.not.property('baseUrl', "https://demoqa.com/menu")
})

allure.severity("critical")
before('base url from config not equal', () => {
    expect(config).to.have.property('baseUrl', "https://demoqa.com")
})

afterEach('screenshot', () => {
    // cy.screenshot()
})