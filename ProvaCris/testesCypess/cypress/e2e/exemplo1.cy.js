/// <reference types="cypress"/>

describe('Criando um cenário de teste para o site globalsqa', () =>{


  it.skip('Testanco criar um PC', () => {

    let date = criarData()

    cy.visit('https://computer-database.gatling.io/computers?f=ACE')
    cy.get('#add').click()
    cy.get('#name').type('pc')
    cy.get('#introduced').type(date[1])
    cy.get('#discontinued').type(date[0])
    cy.get('.primary').click()
    cy.get('.alert-message').should('contain.text', 'Done !')

  })

  it.skip('Testanco editar um PC ja existente', () => {

    let date = criarData()

    cy.visit('https://computer-database.gatling.io/computers?f=ACE')
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    
    cy.get('#introduced').type(date[1])
    cy.get('#discontinued').type(date[0])
    cy.get('.primary').click()
    cy.get('.alert-message').should('contain.text', 'Done !')

  })

  it('Testanco criar um PC com formato de data errado', () => {

    let date = criarData()

    cy.visit('https://computer-database.gatling.io/computers?f=ACE')
    cy.get('#add').click()
    cy.get('#name').type('pc')
    cy.get('#introduced').type('erro')
    cy.get('#discontinued').type('erro')
    cy.get('.primary').click()
    cy.get(':nth-child(2) > .input > .help-inline').should('contain.have', 'Failed to decode date')
    cy.get(':nth-child(3) > .input > .help-inline').should('contain.have', 'Failed to decode date')


  })


  function criarData(){

    let dia = new Date().getDay().toString() 
    let ano = new Date().getFullYear().toString()
    let mes = new Date().getMonth()
    let data1 = ano.toString()+'-'+ mes+'-'+ '0' +dia
    let data2 = (ano-1).toString()+'-'+ mes+'-'+ '0' + dia

    let datas = [data1,data2]


    return datas

  }

})