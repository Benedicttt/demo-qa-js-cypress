/// <reference types="cypress" />

const {allure} = require("../../../support/helpers");

allure.epic('Smoke tests DEMOQA: block Elements');
describe('Smoke tests DEMOQA: block Elements', () => {

    before("click 'Elements' button block", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
    })

    allure.feature("Elements page: visible");
    describe("Elements page: visible", () => {

        allure.story('visible menu list');
        it('visible menu list', () => {
            cy.get('.menu-list').eq(0).should('exist')
            cy.get('.menu-list').eq(0).should('be.visible')
        })

        allure.story("text button is menu list clickable");
        it("text button is menu list clickable", () => {
            let elems = cy.get('.menu-list').eq(0).find('.text')

            elems.each(($elem) => {
                let name = $elem.text()
                cy.allure().step(name)
                cy.get($elem)
                    .should('be.visible')
                    .click()
                    .log($elem.text())
            })

        })
    })
})
