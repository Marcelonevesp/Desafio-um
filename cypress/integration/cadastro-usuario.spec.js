/// <reference types="cypress" />

import Chance from 'chance';
let chance = new Chance();

//Variaveis
let firstName = chance.first();
let lastName = chance.last();
let email = chance.email();

context('Cadastro', () => {
    it('Cadastro  de usuário', () => {
        
        //Acessando o site
        cy.visit('')

        //CLicando no botao para fazer login
        cy.get('a[title ="Log in to your customer account"]').click();

        // Informando o e-mail
        cy.get('input#email_create').type(email);

        // Clicando no botão Create
        cy.get('button#SubmitCreate').click();

        // Informando os campos obrigatórios - PERSONAL INFORMATION
        cy.get('input#id_gender1', { timeout: 10000 }).should('be.visible');
        cy.get('input#id_gender1').click(); //Informando genero masculino
        cy.get('input#customer_firstname').type(firstName); //Informando primeiro nome
        cy.get('input#customer_lastname').type(lastName); //Informando sobrenome
        //cy.get('input#email').type(email); //Informando o e-mail
        cy.get('input#passwd').type('123456');

        // Informando os campos obrigatórios - YOUR ADDRESS
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#address1').type(chance.address());
        cy.get('#city').type(chance.city());
        cy.get('select#id_state').select('Colorado');
        cy.get('#postcode').type(chance.zip());
        cy.get('#phone_mobile').type(chance.phone());

        // Clicar botão salvar
        cy.get('button#submitAccount').click();

        // Validando cadastro com sucesso
        cy.get('.info-account').should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    });
});