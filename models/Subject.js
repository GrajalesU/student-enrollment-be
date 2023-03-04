const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Student = require("./Student");
const Teacher = require("./Teacher");

const Subject = sequelize.define("subject", {
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

Subject.belongsTo(Teacher);
Teacher.hasMany(Subject);

const StudentSubject = sequelize.define("student_subject", {});

Student.belongsToMany(Subject, { through: StudentSubject });
Subject.belongsToMany(Student, { through: StudentSubject });

module.exports = Subject;
