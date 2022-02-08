Feature: Validate the Sample Input form

  @Scenario1
  Scenario: All the expected fields should be displayed in the input form

    Given I launch the expected url
    Then the state dropdown field should have all the expected values
    Then all the expected fields should be displayed in the form
    Then I perform random operation