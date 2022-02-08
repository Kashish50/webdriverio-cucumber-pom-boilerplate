Feature: Perform and validate requests on github API

  @Scenario1
  Scenario: To fetch out all the repositories from a github account

    Given I pick up the baseRequestOne
    Then I send the request to github API1
    Then I should get the 200 status code
    And the response should contain a record with expected name
    And the response should contain a record with expected login


  @Scenario2
  Scenario: To create a new repo in a github account

    Given I pick up the baseRequestTwo
    Then I send the request to github API2
    Then I should get the 201 status code
    And the response of API2 should contain key name with expected value
    And the response of API2 should contain key login with expected value



