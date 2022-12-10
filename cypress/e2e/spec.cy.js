

describe('empty spec', () => {

    beforeEach( () =>{
      cy.visit('http://127.0.0.1:5173/')
    })
    cy.get('input').type('un iphone')
    cy.get('textarea').type('Ivana\nPepa\nCristian')
    cy.get('button').click()
    cy.get('#winner').contains(/Enhorabuena (Ivana|Pepa|Cristian) has ganado un iphone/)
  })

  it.skip('test width no participants', () => {
    //cy.visit('http://127.0.0.1:5173/')
    cy.get('input').type('un iphone')

    cy.get('button').click()
    cy.get('#winner').contains('No hay participantes')
  })
