Feature: Validate the db connection and perform some operations

  @Scenario1
  Scenario: Performing the db connection test on employees collection

    Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
    Then I am able to connect to database successfully