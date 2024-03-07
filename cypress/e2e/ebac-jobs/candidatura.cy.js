/// <reference types="cypress" />

describe('Tests para a página de candidatura', () => { 
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })

    it("Deve renderir levar o usuário para a pagina contendo o formulario de candidatura", () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.url().should('include', 'https://ebac-jobs-e2e.vercel.app/vagas/1')
    })

    it("Deve preencher o formulário de candidatura", () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Níkolas Marques da Silva')
        cy.get('input[name="email"]').type('z6Ueh@example.com')
        cy.get('input[name="telefone"]').type('11999999999')
        cy.get('input[name="endereco"]').type('Rua dos bobos, 0')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()
        cy.on('window:alert', (str) => {
            expect(str).contain('Obrigado pela candidatura!')
        })
    })
 })