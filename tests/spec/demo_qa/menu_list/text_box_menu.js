describe('Smoke tests DEMOQA: block Elements', () => {

    before("click 'Text box' button", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
        cy.get('.menu-list').eq(0).find('.text').eq(0).click()
    })

    describe("fields and text from block Text box is visible", () => {
        it("fields and text from block Text box is visible", () => {
            cy.get('.menu-list').eq(0).should('exist')
            cy.get('.menu-list').eq(0).should('be.visible')
        })
    })
})
