const {allure} = require("../../../support/helpers");

allure.epic('Smoke tests DEMOQA: block Elements');
describe('Smoke tests DEMOQA: block Elements', () => {

    before("click 'Buttons' button", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
        cy.get('.menu-list').eq(0).find('.text').eq(4).click()
    })

    allure.feature("fields and text from block Button is visible");
    describe("fields and text from block Button is visible", () => {
        allure.story("fields and text from block Button is visible");
        it("fields and text from block Button is visible", () => {
            cy.get('.menu-list').eq(0).should('exist')
            cy.get('.menu-list').eq(0).should('be.visible')
        })
    })
})
