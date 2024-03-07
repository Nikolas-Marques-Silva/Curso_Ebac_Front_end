/// <reference types="cypress" />

describe('Tests para a home', () => { 
    it("Deve renderir a home", () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it("Deve filtrar por 'Full Stack'", () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
        cy.get('.FormVagas_campo__E1ppF').type('Fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
 })