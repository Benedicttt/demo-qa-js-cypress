
const { getTextFromArray } = require('../../support/helpers')

describe('Smoke tests DEMOQA: Main page', () => {

    describe("check from site: ", () => {
        it('title', () => {
            cy.title().should('contain', 'DEMOQA')
        })

        it('header logo', () => {
            cy.get('#app > header > a > img').should('have.attr', 'src', "/images/Toolsqa.jpg")
        })

        it('header banner', () => {
            cy.get('.banner-image').should('have.attr', 'src', "/images/WB.svg")
        })

        describe("blocks: ", () => {
            it('count must be 6', () => {
                cy.get(".card").should('have.length', 6)
            })

            it('1 block', () => {
                let arr_elem = [];
                let elems = cy.get(".card > div > .card-body > h5");

                elems.each((elem) => {
                    arr_elem.push(elem.text())
                    cy.log(elem.text())
                })
                    .should('have.length', 6)
                    .then(getTextFromArray)
                    .should('deep.equal',  arr_elem)
            })

            it('first elem', () => {
                cy.get(".card > div > .card-body > h5").eq(0)
                    .should('contain.text', 'Elements')
            })

            it('two elem', () => {
                cy.get(".card > div > .card-body > h5").eq(1)
                    .should('contain.text', 'Forms')
            })

            it('three elem', () => {
                cy.get(".card > div > .card-body > h5").eq(2)
                    .should('contain.text', 'Alerts, Frame & Windows')
            })

            it('four elem', () => {
                cy.get(".card > div > .card-body > h5").eq(3)
                    .should('contain.text', 'Widgets')
            })

            it('five elem', () => {
                cy.get(".card > div > .card-body > h5").eq(4)
                    .should('contain.text', 'Interactions')
            })

            it('six elem', () => {
                cy.get(".card > div > .card-body > h5").eq(5)
                    .should('contain.text', 'Book Store Application')
            })

        })
    })
})
