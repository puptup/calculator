import { pathes } from "./constants"

describe('Display', ()=>{
  for (const path of pathes){
    it(`${path.name} should have a zero value as default`, () => {
      cy.visit(path.path)
      cy.get('[data-test=value]').should('have.text', '0')
    })

    it(`${path.name} should have a empty formula as default`, () => {
      cy.visit(path.path)
      cy.get('[data-test=formula]').should('have.text', '')
    })
  }
})