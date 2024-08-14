Feature: Checkout Functionality

  Scenario: User completes a purchase
    Given the user is logged <username> and <password> in and on the cart page and has <product> in cart
    When the user clicks Checkout button
    Then the user should be redirected to checkout infomation page
    And the user should see field of "first name", "last name", "zip", cancel button
    When the user input <first_name> , <last_name> , <zip>
    And the user clicks "Continue" button
    Then the user should be redirected to checkout overwiew page
    And the user should see detail of product , "payment", "shipping" info
    When the user clicks "Finish" button
    Then the user should be redirected to checkout complete page
    And the user should see "Thank you for your order!"
    And the user should see "Back Home" button

    Examples:
      | username      | password     | product                  | first_name | last_name | zip    |
      | standard_user | secret_sauce | Sauce Labs Fleece Jacket | jonathan   | hermawan  | 123123 |
