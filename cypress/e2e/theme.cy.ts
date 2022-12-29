import { pathes } from "./constants"

describe('Theme', () => {
  for(const path of pathes){
    beforeEach(()=>{
      cy.visit(path.path)
    })

    it(`${path.name} should have dark theme as default`, () => {
      cy.get('[data-test="keypad"]').should('have.css', 'background-color', 'rgb(50, 56, 68)')
      cy.get('[data-test="calculator"]').should('have.css', 'background-color', 'rgb(33, 36, 44)')
    })

    it(`${path.name} should change theme to ligth by clikcing on icon`, () => {
      cy.get('[data-test=to_light_mode]').click()
      cy.get('[data-test="keypad"]').should('not.have.css', 'background-color', 'rgb(50, 56, 68)')
      cy.get('[data-test="calculator"]').should('not.have.css', 'background-color', 'rgb(33, 36, 44)')
      cy.get('[data-test="keypad"]').should('have.css', 'background-color', 'rgb(212, 212, 212)')
      cy.get('[data-test="calculator"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })

    it(`${path.name} should change theme to dark by clikcing on icon`, () => {
      cy.get('[data-test=to_light_mode]').click()
      cy.get('[data-test=to_dark_mode]').click()
      cy.get('[data-test="keypad"]').should('not.have.css', 'background-color', 'rgb(212, 212, 212)')
      cy.get('[data-test="calculator"]').should('not.have.css', 'background-color', 'rgb(255, 255, 255)')
      cy.get('[data-test="keypad"]').should('have.css', 'background-color', 'rgb(50, 56, 68)')
      cy.get('[data-test="calculator"]').should('have.css', 'background-color', 'rgb(33, 36, 44)')
    })
  }
})