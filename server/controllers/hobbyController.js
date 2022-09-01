const { Hobby } = require("../models/models");
const ApiError = require("../error/ApiError");

class HobbyController {
  async getAll(req, res) {
    const hobbies = await Hobby.findAll();
    return res.json(hobbies);
  }

  async create(req, res) {
    const { name } = req.body;
    const hobby = await Hobby.create({ name });
    return res.json(hobby);
  }

  async getOne(req, res) {}
}

module.exports = new HobbyController();
