
describe('Home Route', () => {
    beforeEach(function(){
      cy.visit('/commits')
    })
  
    it('verifies list of commits', () => {
        cy.get('.xs12 > .v-toolbar > .v-toolbar__content > .v-toolbar__title').should('have.text', 'Commits')
        cy.get('.container').should('contain','hawkeye64')
        cy.get('.container').should('contain','848614c2f662d32b1ee0169680af08bd66498ade')
        })

    it('searches for a commit and verifies details', function() {
        cy.wait(1000)
        cy.get('.v-menu__content').find('.v-list__tile__title').contains('nekosaur').click({force:true})
        cy.get('.v-select__selection').should('have.text', 'nekosaur')
        cy.get('table').find('td').should('contain', 'nekosaur')
        cy.get('.v-text-field__slot > input').type('a476b985ceda80c61e8a12346afa62b1625a63f7')
        cy.get('tbody > :nth-child(1) > :nth-child(2)')
            .should('have.text', 'a476b985ceda80c61e8a12346afa62b1625a63f7')
            .click()
        cy.get('.v-card > .v-toolbar > .v-toolbar__content > .v-toolbar__title').should('have.text','Commit a476b985ceda80c61e8a12346afa62b1625a63f7')
        cy.get('.font-weight-bold').should('contain', 'Albert Kaaman')
    })


    })