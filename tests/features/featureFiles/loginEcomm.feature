Feature: Validate the login feature of Ecommerce Application

  @Scenario1
  Scenario Outline: When user enters wrong credentials , he is ot able to login and authentication error occurs

    Given user launches the expected url of ecommerce web application
    Then user is able to open my ecommerce web application successfully
    When user clicks on the signin button
    Then user is displayed login screen
    When user enters value in the email address field <Email>
    Then user enters value in the password field <Password>
    Then user gets login failed error message

                  Examples:
                      | Email                          | Password    |
                      | kashishpasrija82@gmail.com     | Kas@000066  |
                      | kashish@gmail.com              | Kas@0000    |

   @Scenario2_login
  Scenario Outline: When user enters the email in wrong format , email field changes to red colour and validation occurs

    Given user launches the expected url of ecommerce web application
    Then user is able to open my ecommerce web application successfully
    When user clicks on the signin button
    Then user is displayed login screen
    When user enters value in the email address field <Email>
    Then the email address field changes to red colour and invalid email validation occurs

                  Examples:
                      | Email                   |                  
                      | kashishpasrija82        |       
                      | kashish                 |                                  
                      
                  