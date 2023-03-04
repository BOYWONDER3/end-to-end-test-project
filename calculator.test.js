import { describe } from "node:test";

describe('calculator', () => {
    it('simple test', () => {
        cy.visit('http://localhost:3000/')
        cy.visit("/")
        cy.getCalculatorButton("5").click()
        cy.getCalculatorButton("5").click()
        cy.getCalculatorButton("+").click()
        cy.getCalculatorButton("8").click()
        cy.getCalculatorButton("=").click()
    })
})


