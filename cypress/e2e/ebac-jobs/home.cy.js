/// <reference types="cypress" />

describe('Tests para a home', () => { 
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })
    it("Deve renderir a home", () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it("Deve filtrar por 'Full Stack'", () => {
        cy.get('.FormVagas_campo__E1ppF').type('Fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
 })