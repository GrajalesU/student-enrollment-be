const { Student, Subject, Teacher } = require("../models");

const getAllStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

const getStudentById = async (req, res) => {
  const student = await Student.findByPk(req.params.id, {
    include: [
      {
        model: Subject,
        attributes: ["name"],
        include: [
          {
            model: Teacher,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
  if (student == null) {
    return res.status(404).send("Sorry can't find that!");
  }
  res.json(student);
};

const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

const updateStudentName = async (req, res) => {
  await Student.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ success: true });
};

const deleteStudent = async (req, res) => {
  await Student.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true });
};

const enrollSubjects = async (req, res) => {
  const student = await Student.findByPk(req.body.id, {
    include: [
      {
        model: Subject,
        attributes: ["name"],
        include: [
          {
            model: Teacher,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
  const { subjects } = req.body;
  for (let index = 0; index < subjects.length; index++) {
    const subjectId = subjects[index];
    const currentSubject = await Subject.findByPk(subjectId);

    await student.addSubject(currentSubject);
  }
  if (student == null) {
    return res.status(404).send("Sorry can't find that!");
  }
  res.json(student);
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentName,
  deleteStudent,
  enrollSubjects,
};
