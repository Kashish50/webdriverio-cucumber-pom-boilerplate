Feature: Validate the CRUD Operations on the demo api

  @Scenario1
  Scenario: Performing the get operation on the dempo api1

    Given I send the request to the demo api1
    Then demo api1 should return the 200 status code
    Then the response body should contain the user with id 2
    Then the response body should contain all the expected keys data,support


  @Scenario2
  Scenario: Performing the post operation on the dempo api2

    Given I send the request to the demo api2
    Then demo api2 should return the 204 status code


  @Scenario3
  Scenario: Performing the post operation on the dempo api3

    Given I send the request to the demo api3
    Then demo api3 should return the 201 status code
    Then demo api3 should return the id with 3 digits in the response body
    
    


