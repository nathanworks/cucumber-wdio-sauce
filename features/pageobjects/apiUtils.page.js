const axios = require("axios");

class ApiUtils {
  constructor() {
    this.baseUrl = "https://gorest.co.in/public-api/users";
    this.token =
      "4a693cb82de363f1a95121c610897e1b9725c89d02f4d9bd00c6d5cb5600f018";
  }

  async createUser(name, email, gender, status) {
    const response = await axios.post(
      this.baseUrl,
      {
        name,
        email,
        gender,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      userId: response.data.data.id,
      create: response.data
    };
  }

  async updateUser(userId, name, email) {
    await axios.put(
      `${this.baseUrl}/${userId}`,
      {
        name,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  async getUser(userId) {
    const response = await axios.get(`${this.baseUrl}/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async deleteUser(userId) {
    const response = await axios.delete(`${this.baseUrl}/${userId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
}

module.exports = new ApiUtils();
