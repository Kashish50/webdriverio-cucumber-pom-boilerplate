Feature: Adding item to the bag by searching from the home page

    @Scenario1
    Scenario: Validate that I am successfully able to add item to bag by searching from home page

        Given I am successfully able to launch the android mobile app
        Then I search for the 'iphone 12'
        And I select 'iphone 12' from the search suggestions
        Then I select 'Apple iPhone 12 Mini (64GB) - Red' from the products search list
        Then the product description page opens up
        When I click on the add to bag button
        Then the product is successfully added to the cart
        And I click skip and go to cart button
        Then the cart page open up successfully
        When I click on the remove button
        Then the product is successfully removed from the cart and cart becomes empty
        And button continue shopping is displayed on the screen
        When I click on the button continue shopping
        Then the home page of the android app opens up

    @Scenario2
    Scenario: Validate that I am successfully able to add multiple items to bag by searching from home page

        Given I am successfully able to launch the android mobile app
        Then I search for the 'iphone 12'
        And I select 'iphone 12' from the search suggestions
        Then I select 'Apple iPhone 12 Mini (64GB) - Red' from the products search list
        Then the product description page opens up
        When I click on the add to bag button
        Then the product is successfully added to the cart
        And I click skip and go to cart button
        Then the cart page open up successfully
        When I click on the remove button
        Then the product is successfully removed from the cart and cart becomes empty
        And button continue shopping is displayed on the screen
        When I click on the button continue shopping
        Then the home page of the android app opens up