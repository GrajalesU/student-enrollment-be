const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Teacher = sequelize.define("teachers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Teacher;
