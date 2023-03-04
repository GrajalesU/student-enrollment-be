const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("students", {
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

module.exports = Student;
