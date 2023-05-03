describe('Smoke tests DEMOQA: block Elements', () => {

    before("click 'Elements' button block", () => {
        cy.get(".card > div > .card-body > h5").eq(0).click()
    })

    describe("Elements page: visible", () => {
        it('visible menu list', () => {
            cy.get('.menu-list').eq(0).should('exist')
            cy.get('.menu-list').eq(0).should('be.visible')
        })

        it("text button is menu list clickable", () => {
            let elems = cy.get('.menu-list').eq(0).find('.text')

            elems.each(($elem) => {
                cy.get($elem)
                    .should('be.visible')
                    .click()
                    .log($elem.text())
            })
        })
    })
})
