Feature: Add to Cart Functionality

  Scenario: User adds a product to the cart
    Given the user is logged <username> and <password> in and on the products page and product has been sorted
    When the user clicks "Add to Cart" on <product>
    Then the button label should change to "Remove" on <product>
    And the cart icon should show "1" item

    Examples:
      | username      | password     | product                  |
      | standard_user | secret_sauce | Sauce Labs Fleece Jacket |
