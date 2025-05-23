it.only('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  },{
    body: [{
      name: "TAU",
      starred: true,
      id: 11,
      user: 0,
      created: '2023-11-03'
    }]
  }).as('boardList')

  cy.visit('/');

})

it.only('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  },{
    statusCode: 500
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

    cy.get('[data-cy="notification-message"]')
      .should('be.visible')
})