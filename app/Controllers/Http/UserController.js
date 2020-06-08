"use strict";

const User = use("App/Models/User");

class UserController {
  // login user
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  // sign up user
  async register({ request }) {
    const { email, password } = request.all();
    console.log(email, password);
    await User.create({
      email,
      password,
      username: email,
    });
    return this.login(...arguments);
  }
}

module.exports = UserController;
