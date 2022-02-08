Feature: Validate the db connection and perform the some operations on customers collection

    @Scenario1
    Scenario: Performing the validation on the customers collection data

        Given I make a connection request to mydb database on local host url mongodb://localhost:27017/
        Then I am able to connect to database successfully
        Then I print yml data