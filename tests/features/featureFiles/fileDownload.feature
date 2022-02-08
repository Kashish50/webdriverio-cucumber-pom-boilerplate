Feature: Validate the file download feature

  @Scenario1
  Scenario: User should be able to download the file successfully

    Given I am on the file download page
    Then the generate file button should be displayed
    Then the generate file button should be disabled by default
    When I enter some data in the textbox
    Then the generate file button should get enabled
    When I click on the generate file button
    Then the download link appears in the window
    When I click on the download link
    Then the file is downloaded successfully