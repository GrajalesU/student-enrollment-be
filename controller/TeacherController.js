const { Teacher } = require("../models");

const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.findAll();
  res.json(teachers);
};

const getTeacherById = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  res.json(teacher);
};

const addTeacher = async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.json(teacher);
};

const updateTeacherName = async (req, res) => {
  await Teacher.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: true });
};

const deleteTeacher = async (req, res) => {
  await Teacher.destroy({
    where: { id: req.params.id },
  });
  res.json({ success: true });
};

module.exports = {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherName,
  deleteTeacher,
};
