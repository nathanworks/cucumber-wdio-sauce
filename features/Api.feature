Feature: User Management

  Scenario: Create and update a user
    Given I create a new user with name <name>, email <email>, <gender> and <status>
    When I update the user with new name <new_name> and new email <new_email>
    Then I should see the updated user details
    And I delete the user

    Examples:
      | name        | email                  | new_name | new_email            | gender | status |
      | Jjjojoooooo | jjonathanjoo@gmail.com | Nathannn | satuduatig@gmail.com | male   | active |
