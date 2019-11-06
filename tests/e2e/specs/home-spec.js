
describe('Home Route', () => {
  beforeEach(function(){
    cy.visit('/')
  })

  it('checks home page header', () => {
     cy.get('.headline > span').should('contain', 'Vuetify Repo')
     cy.get('.v-list__tile__title').should('have.text', 'Commits')
     cy.get('.v-btn').should('have.text', 'GitHub Login')
     cy.get('.v-list')
        .click()
        .url('should.be', '/commits')
  })
})
