Feature: Login Functionality

  Scenario: User login with <is_valid> credentials
    Given the user is on login page
    When the user input <username> and <password>
    And the user click Login button
    Then credential is: <is_valid> . user should be redirect to product page
    And credential is: <is_valid> . user should see list of products

    Examples:
      | username      | password     | is_valid |
      | standard_user | secret_sauce | valid    |

  Scenario: User login with <is_valid> credentials
    Given the user is on login page
    When the user input <username> and <password>
    And the user click Login button
    Then credential is: <is_valid> . user should see error message: <msg>

    Examples:
      | username        | password     | is_valid | msg                                                                       |
      | asep            | usep         | invalid  | Epic sadface: Username and password do not match any user in this service |
