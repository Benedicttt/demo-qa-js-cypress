const { getTextFromArray, allure } = require('../../support/helpers')

allure.epic('Smoke tests DEMOQA: Main page');
describe('Smoke tests DEMOQA: Main page', () => {

    allure.feature("check from site: ");
    describe("check from site: ", () => {

        allure.story('title');
        it('title', () => {
            cy.title().should('contain', 'DEMOQA')
        })

        allure.story('header logo');
        it('header logo', () => {
            cy.get('#app > header > a > img').should('have.attr', 'src', "/images/Toolsqa.jpg")
        })

        allure.story('header banner');
        it('header banner', () => {
            cy.get('.banner-image').should('have.attr', 'src', "/images/WB.svg")
        })

        allure.feature("blocks: ");
        describe("blocks: ", () => {

            allure.story('count must be 6');
            it('count must be 6', () => {
                cy.get(".card").should('have.length', 6)
            })

            allure.story('1 block');
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

            allure.story('first elem');
            it('first elem', () => {
                cy.get(".card > div > .card-body > h5").eq(0)
                    .should('contain.text', 'Elements')
            })

            allure.story('two elem');
            it('two elem', () => {
                cy.get(".card > div > .card-body > h5").eq(1)
                    .should('contain.text', 'Forms')
            })

            allure.story('three elem');
            it('three elem', () => {
                cy.get(".card > div > .card-body > h5").eq(2)
                    .should('contain.text', 'Alerts, Frame & Windows')
            })

            it('four elem', () => {
                cy.get(".card > div > .card-body > h5").eq(3)
                    .should('contain.text', 'Widgets')
            })

            allure.story('five elem');
            it('five elem', () => {
                cy.get(".card > div > .card-body > h5").eq(4)
                    .should('contain.text', 'Interactions')
            })

            allure.story('six elem');
            it('six elem', () => {
                cy.get(".card > div > .card-body > h5").eq(5)
                    .should('contain.text', 'Book Store Application')
            })
        })
    })
})

// allure.parentSuite("someParentSuite")
// allure.suite("someSuite")
// allure.subSuite("someSubSuite")
// allure.epic("thisisepic")
// allure.feature("nice")
// allure.story("cool")
