import { pathes } from "./constants"

describe('History', () => {
  for (let path of pathes){
    beforeEach(()=>{
      cy.visit(path.path)
    })

    it(`${path.name} should have a show history button`, () =>{
      cy.get('[data-test=show_history]').should('exist')
    })

    it(`${path.name} should show history by click on the button`, () => {
      cy.get('[data-test=history]').should('not.exist')
      cy.get('[data-test=show_history]').click()
      cy.get('[data-test=history]').should('exist')
    })

    it(`${path.name} should contain calculation results and formulas and clear history`, () => {
      cy.get('[data-test=5]').click()
      cy.get('[data-test="*"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="C"]').click()
      
      cy.get('[data-test=5]').click()
      cy.get('[data-test="/"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="C"]').click()

      cy.get('[data-test=5]').click()
      cy.get('[data-test="-"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="C"]').click()

      cy.get('[data-test=5]').click()
      cy.get('[data-test="+"]').click()
      cy.get('[data-test=5]').click()
      cy.get('[data-test="="]').click()
      cy.get('[data-test="C"]').click()
      
      cy.get('[data-test=show_history]').click()
      cy.get('[data-test=history_list] li').should((items) => {
        expect(items).to.have.length(4)
        expect(items.eq(0)).to.contain.text('1. 5*5 = 25')
        expect(items.eq(1)).to.contain.text('2. 5/5 = 1')
        expect(items.eq(2)).to.contain.text('3. 5-5 = 0')
        expect(items.eq(3)).to.contain.text('4. 5+5 = 10')
      })

      cy.get('[data-test=clear_history]').click()
      cy.get('[data-test=history_list] li').should('not.exist')
      cy.contains('History is empty').should('be.visible')
    })
  }
})