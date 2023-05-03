describe('Smoke tests DEMOQA: block Elements, menu "Links"', () => {

    before("click 'Links' button", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
        cy.get('.menu-list').eq(0).find('.text').eq(5).click()
    })

    describe("fields and text", () => {
        it('visible menu list', () => {
            cy.get('.menu-list').eq(0).should('exist')
            cy.get('.menu-list').eq(0).should('be.visible')
        })
    })
})
