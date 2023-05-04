describe('Smoke tests DEMOQA: block Elements', () => {

    before("click 'Check box' button", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
        cy.get('.menu-list').eq(0).find('.text').eq(1).click()
    })

    describe("fields and text from block Check box is visible", () => {
        it("fields and text from block Check box is visible", () => {
            cy.get('.menu-list').eq(1).should('exist')
            cy.get('.menu-list').eq(1).should('be.visible')
        })
    })
})
