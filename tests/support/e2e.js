import '@shelex/cypress-allure-plugin';
const config = Cypress.config()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

before('Open main page', () => {
    cy.visit("/")
})

before('base url from config equal', () => {
    expect(config).to.have.not.property('baseUrl', "https://demoqa.com/menu")
})

before('base url from config not equal', () => {
    expect(config).to.have.property('baseUrl', "https://demoqa.com")
})
