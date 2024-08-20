const axios = require("axios");

class ApiUtils {
  constructor() {
    this.baseUrl = "https://gorest.co.in/public-api/users";
    this.token =
      "d4701b4e14e582234f20221b15d4e0e604bc5c99111b6f5fbc9558dc4bed50ff";
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
