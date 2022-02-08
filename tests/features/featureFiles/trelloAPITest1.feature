Feature: Perform the test on the Trello API

  @Scenario1
  Scenario: Creating a new board by sending request to trello API

    Given I send the request to Trello API to create a new board
    And I get the 200 status code

  