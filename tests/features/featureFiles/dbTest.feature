Feature: Validate the db connection and perform some operations

  @Scenario1
  Scenario: Performing the db connection test on employees collection

    Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
    Then I am able to connect to database successfully
    Then I select all the records from employees collection
    Then I select the records from employees collection whose address is Pune
    Then I sort the name in employees collection in ascending order
    Then I sort the name in employees collection in descending order


  @Scenario2
  Scenario: Performing the db connection test on customers collection

    Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
    Then I am able to connect to database successfully
    Then I select all the records from customers collection
    Then I select the records from customers collection whose name is Kashish
    Then I filter the records from customers collection whose city in the address is Mumbai