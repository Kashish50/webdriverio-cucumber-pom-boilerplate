Feature: Validate the Home page of paytm web application

  @Scenario1
  Scenario Outline: All the expected header options should appear and validate mobile recharge section


    Given I launch the paytm web application
    Then I am successfully able to launch paytm web application
    Then all the expected options in the header are present
    And I hover over the more in the header options
    Then all the expected options under more options are present
    Then prepaid radio button should be selected by default
    When I enter 12 digit number <MobileNumber> in mobile number field
    Then mobile number field accepts max ten char
    And the mobile operator circle field should not be visible
    Then I select <MobileOperator> as mobile operator
    And I am able to select <MobileOperator> as mobile operator successfully
    Then the mobile operator circle field becomes visible
    And the button change mobile operator becomes visible
    And the button change mobile operator has the dark sky blue color

    Examples:
      | MobileNumber | MobileOperator |
      | 666677889900 | Vi             |
      | 905666890398 | Airtel         |

  @Scenario2
  Scenario: Validate the Book on paytm section on the home page

    Given I launch the paytm web application
    Then I am successfully able to launch paytm web application
    Then I scroll to the book on paytm section
    And the book on paytm section is displayed
    Then the Tracking option should be displayed under the book on paytm section

  @Scenario3
  Scenario: Validate the Education option in the headers

    Given I launch the paytm web application
    Then I am successfully able to launch paytm web application
    Then I select the Education from the header options
    