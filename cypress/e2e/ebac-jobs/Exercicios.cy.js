/// <reference types="cypress" />

describe('Tests para a página de Contatos', () => { 
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste de adição de um contato', () => {
        cy.get('input[type="text"]').type('Níkolas')
        cy.get('input[type="email"]').type('fh1pV@example.com')
        cy.get('input[type="tel"]').type('+55 11 99999-9999')
        cy.get('button[type="submit"]').click()
        cy.screenshot()
    })

    it('Teste de edição de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Níkolas[EDITADO]')
        cy.get('input[type="email"]').clear().type('editado@editado.com')
        cy.get('input[type="tel"]').clear().type('+55 11 99999-9999[EDITADO]')
        cy.get('button[type="submit"]').click()
        cy.screenshot()
    })

    it('Teste de exclusão de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.screenshot()
    })

    // O teste começa com "3" (na verdade 4) div's, mas a quantidade não reseta ao recarregar a página, por isso, não foi possivel utiliza o should
 })