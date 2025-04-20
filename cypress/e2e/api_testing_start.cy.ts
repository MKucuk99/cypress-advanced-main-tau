it.only('sends a request over API', () => {

  cy.request('POST', '/api/boards', {
    name: 'Created via cy.request()'
  })

  cy.visit('/')
  
});

it('response gets 201 status', () => {
  
  cy.request('POST', '/api/boards', {
    name: 'Created via cy.request()'
  }).its('status')
    .should('eq', 201)

});

it.only('testing board list', () => {
  
  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then(boards => {

    expect(boards.status).eq(200)
    expect(boards.body).to.have.length(2)
    expect(boards.body[0].id).to.have.
  })
});

it('resetting database', () => {
  
});