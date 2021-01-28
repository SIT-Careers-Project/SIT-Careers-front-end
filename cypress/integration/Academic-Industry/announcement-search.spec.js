describe('The Announcement Search Page', () => {
  it('successfully loads', () => {
    cy.visit('/academic-industry/announcements')
  })
  it('This page contains navbar component', () => {
    cy.get('[data-cy=core-navbar]').should('be.visible')
  })
  it('It is a have footer component', () => {
    cy.get('[data-cy=core-footer]').should('be.visible')
  })
  it('should have button ค้นหา', () => {
    cy.get('button > .px-5').should('be.visible')
    cy.contains('ค้นหา')
  })
  it('should have button สมัครงาน', () => {
    cy.get('button > .px-5').should('be.visible')
    cy.contains('สมัครงาน')
  })
})