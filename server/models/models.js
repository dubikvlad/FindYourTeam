const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
});

const Event = sequelize.define("event", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  // admin: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
  // users: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
  is_private: { type: DataTypes.BOOLEAN, defaultValue: false },
  // date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  selected_hobby: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: ["unset"],
  },
  city_name: { type: DataTypes.STRING },
  // status: { type: DataTypes.STRING, defaultValue: "ACTIVE" },
  geolocation: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

const Hobby = sequelize.define("hobby", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const City = sequelize.define("city", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// const TypeUserEvent = sequelize.define("type_user_event", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

const EventHobby = sequelize.define("type_event_hobby", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(Event);
Event.belongsTo(User);

Event.belongsToMany(Hobby, { through: EventHobby });
Hobby.belongsToMany(Event, { through: EventHobby });

City.hasMany(Event);
Event.belongsTo(City);

module.exports = {
  User,
  Event,
  Hobby,
  City,
  // TypeUserEvent,
  TypeEventHobby: EventHobby,
};
