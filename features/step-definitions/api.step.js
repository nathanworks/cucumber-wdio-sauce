const { Given, When, Then } = require("@cucumber/cucumber");
const ApiUtils = require("../pageobjects/apiUtils.page");

let userId = null;


Given(
  /^I create a new user with name (.*), email (.*), (.*) and (.*)$/,

  async function (name, email, gender, status) {
    const result = await ApiUtils.createUser(name, email, gender, status);
   
    userId = result.userId;
    console.log(`Created user ID: ${result.userId}`);
    console.log(`Created user detail: ${JSON.stringify(result.create)}`);
  }
);


When(/^I update the user with new name (.*) and new email (.*)$/,
  async function (new_name, new_email) {
    if (!userId) {
      throw new Error("No user ID found. Ensure user is created first.");
    }
    await ApiUtils.updateUser(userId, new_name, new_email);
  }
);

Then("I should see the updated user details", async function () {
  if (!userId) {
    throw new Error("No user ID found. Ensure user is created and updated.");
  }
  const user = await ApiUtils.getUser(userId);
  console.log(`Updated user details:`, user);
});


Then(/^I delete the user$/, async function() {
   if (!userId) {
     throw new Error("No user ID found. Ensure user is created and updated.");
   }
   const deleted = await ApiUtils.deleteUser(userId);
   console.log('Deleted user:',deleted);
});
