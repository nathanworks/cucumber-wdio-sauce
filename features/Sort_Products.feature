Feature: Sort Product

  Scenario: User sort item by <sortOption>
    Given the user is logged <username> and <password> in and on the products page
    When the user click sort option and choose <sortOption>
    Then the user should see sorted order

    Examples:
      | username      | password     | sortOption          |
      | standard_user | secret_sauce | Price (low to high) |
