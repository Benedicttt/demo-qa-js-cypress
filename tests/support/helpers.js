const getTextFromArray = ($el) => {
    return Cypress._.map($el, 'innerText')
}

module.exports = { getTextFromArray }
