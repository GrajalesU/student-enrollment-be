const { Subject, Teacher } = require("../models");

const getSubjects = async (req, res) => {
  const subjects = await Subject.findAndCountAll({
    include: [{ model: Teacher }],
  });
  res.json(subjects);
};

const getSubjectById = async (req, res) => {
  const subject = await Subject.findByPk(req.params.id, {
    include: [{ model: Teacher }],
  });
  res.json(subject);
};

const createSubject = async (req, res) => {
  const subject = await Subject.create(req.body);
  res.json(subject);
};

const updateSubjectName = async (req, res) => {
  await Subject.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: true });
};

const deleteSubject = async (req, res) => {
  await Subject.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true });
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubjectName,
  deleteSubject,
};
