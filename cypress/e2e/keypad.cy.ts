import { Actions, Numbers, pathes } from "./constants"

describe('Keypad', () => {
  for (const path of pathes){
    beforeEach(()=>{
      cy.visit(path.path)
    })

    it(`${path.name} should have a numbers`, () => {
      for(const number of Numbers){
        cy.get(`[data-test=${number}]`).should('exist')
      }
    })

    it(`${path.name} should have all actions`, () => {
      for(const action of Actions){
        cy.get(`[data-test="${action}"]`).should('exist')
      }
    })

    it(`${path.name} should clear value and formula by clicking on С `, () => {
      cy.get(`[data-test="5"]`).click()
      cy.get(`[data-test="*"]`).click()
      cy.get(`[data-test="5"]`).click()
      cy.get('[data-test="value"').should('have.text', '5')
      cy.get('[data-test="formula"').should('have.text', '5*')
      cy.get(`[data-test="C"]`).click()
      cy.get('[data-test="value"').should('have.text', '0')
      cy.get('[data-test="formula"').should('have.text', '')
    })

    it(`${path.name} should clear last number in value by clicking on CE`, () => {
      cy.get(`[data-test="5"]`).click().click()
      cy.get('[data-test="value"').should('have.text', '55')
      cy.get('[data-test="CE"]').click()
      cy.get('[data-test="value"').should('have.text', '5')
      cy.get('[data-test="CE"]').click()
      cy.get('[data-test="value"').should('have.text', '0')
    })

    it(`${path.name} should pass value into formula if action pressed`, () => {
      cy.get(`[data-test="5"]`).click().click()
      cy.get(`[data-test="*"]`).click()
      cy.get('[data-test="value"').should('have.text', '*')
      cy.get('[data-test="formula"').should('have.text', '55')
    })
  }
})