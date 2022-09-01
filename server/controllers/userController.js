const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User } = require("../models/models");

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Wrong e-mail or password"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.badRequest("User with that email already exists"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
  }

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("ID not set"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
