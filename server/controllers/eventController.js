const uuid = require("uuid");
const path = require("path");
const { Event } = require("../models/models");
const ApiError = require("../error/ApiError");

class UserController {
  async create(req, res, next) {
    try {
      const {
        name,
        is_private,
        selected_hobby,
        city_name,
        geolocation,
        decription,
        cityId,
        userId,
      } = req.body;
      let fileName;
      const { image } = req.files ? req.files : { image: null };
      !!image && (fileName = uuid.v4() + ".jpg");
      image?.mv(path.resolve(__dirname, "..", "static", fileName));

      const event = await Event.create({
        name,
        is_private,
        selected_hobby: Array.isArray(selected_hobby)
          ? selected_hobby
          : [selected_hobby],
        city_name,
        geolocation,
        decription,
        image: image && fileName,
        cityId,
        userId,
      });

      return res.json(event);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { cityId, userId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;

    let events;
    if (!cityId && !userId) {
      events = await Event.findAndCountAll({ limit, offset });
    }
    if (!cityId && userId) {
      events = await Event.findAndCountAll({
        where: { userId },
        limit,
        offset,
      });
    }
    if (cityId && !userId) {
      events = await Event.findAndCountAll({
        where: { cityId },
        limit,
        offset,
      });
    }
    if (cityId && userId) {
      events = await Event.findAndCountAll({
        where: { cityId, userId },
        limit,
        offset,
      });
    }

    return res.json(events);
  }

  async getEvent(req, res) {
    const { id } = req.params;
    const event = await Event.findOne({
      where: { id },
    });

    return res.json(event);
  }
}

module.exports = new UserController();
