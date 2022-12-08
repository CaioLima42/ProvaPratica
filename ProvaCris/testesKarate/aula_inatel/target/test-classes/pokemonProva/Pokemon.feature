Feature: sample karate test script
for help, see: https://github.com/intuit/karate/wiki/IDE-Support

Background:
    * url 'https://pokeapi.co/api/v2/'
  
  Scenario: pesquisando pelo pokemon charmander
      Given path 'pokemon/charmander'
      When method get
      Then status 200
      And match responce.height == 6
  
      
  Scenario: testando pesquisar um pokemon nao existente
      Given url url_base
      And path 'pokemon/jesus'
      When method get
      Then status 404
  
  Scenario: saber qual o 7 tipo de pokemon
      Given path 'type/7'
      When method get
      Then status 200
      And match responce.name ==  "bug"
  
  Scenario: saber qual o 7 tipo de pokemon
      Given path 'ability/limber'
      When method get
      Then status 200
      And match response.id == 7
  
  Scenario: saber qual o capture_rat por especie
      Given path 'pokemon-species/blastoise'
      When method get
      Then status 200
      And match response.capture_rate == 45
  
  
    Scenario: saber qual o id da ability limber
        Given path 'ability/limber'
        When method get
        Then status 200
        And match response.id == 7