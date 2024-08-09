Feature: Product Management

  Scenario Outline: Sort products and Checkout
    Given I am on the login page
    When I login with <username> and <password>
    Then I am on the product page
    When I sort products by "<sortOption>"
    When I add a product to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in the checkout details <name> <last name> <postal>
    And I complete the purchase
    Then I should see the order confirmation

    Examples:
      | username      | password     | sortOption          | name     | last name | postal |
      | standard_user | secret_sauce | Price (low to high) | Jonathan | Hermawan  |  12345 |
