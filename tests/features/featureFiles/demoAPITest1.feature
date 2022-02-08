Feature: Validate the keys returned by the demo api

  @Scenario1
  Scenario: Performing the get operation on the dempo api1 and verifying nested keys

    Given I send the request to the demo api4
    And data should contain nested keys id,email,first_name,last_name,avatar

  @Scenario2
  Scenario: Performing the get operation

    Given I send the request to the demo api5
    And I print id of first record
