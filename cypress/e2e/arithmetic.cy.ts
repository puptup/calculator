import { pathes } from "./constants"

describe('Arithmetic', () => {
  for(const path of pathes){

    beforeEach(()=>{
      cy.visit(path.path)
    })

    it(`${path.name} operations should be prioritized`, () => {
      cy.get('[data-test=5]').click()
      cy.get('[data-test="*"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="+"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="/"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="-"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="value"]').should('have.text', '21')
    })

    it(`${path.name} brackets should work correctly`, ()=>{
      cy.get('[data-test=5]').click()
      cy.get('[data-test="("]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="+"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="("]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="+"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="value"]').should('have.text', '275')
    })

    it(`${path.name} brackets should automatically close`, ()=>{
      cy.get('[data-test="("]').click().click().click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="+"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="value"]').should('have.text', '10')
    })
  }
})