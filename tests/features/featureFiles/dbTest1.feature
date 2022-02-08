Feature: Validate the db connection and perform the some operations

    @Scenario1
    Scenario: Performing the validation on the employees collection data

        Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
        Then I am able to connect to database successfully
        And I select the records from employees collection whose address is Pune
        Then I validate that the data fetched is correct

    @Scenario2
    Scenario: Performing the validation on the employees collection data

        Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
        Then I am able to connect to database successfully
        Then I select all the records from employees collection whose address is Mumbai
        Then I validate that test data 2 fetched above is correct
