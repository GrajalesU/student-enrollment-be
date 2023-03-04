require("dotenv").config();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentName,
  deleteStudent,
  enrollSubjects,
} = require("./controller/StudentController");

const {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubjectName,
  deleteSubject,
} = require("./controller/SubjectController");

const {
  addTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherName,
} = require("./controller/TeacherController");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.DB_NAME || 5000;
app.use(express.json());
app.use(cors());

//Student routes
app.get("/students", getAllStudents);

app.get("/students/:id", getStudentById);

app.post("/students", createStudent);

app.put("/students/:id", updateStudentName);

app.delete("/student/id", deleteStudent);

//Teacher routes
app.get("/teachers", getAllTeachers);

app.get("/teachers/:id", getTeacherById);

app.post("/teachers", addTeacher);

app.put("/teachers/:id", updateTeacherName);

app.delete("/teachers/:id", deleteTeacher);

// Subject routes
app.get("/subjects", getSubjects);

app.get("/subjects/:id", getSubjectById);

app.post("/subjects", createSubject);

app.put("/subjects/:id", updateSubjectName);

app.delete("/subjects/:id", deleteSubject);

// Enroll routes
app.post("/enroll", enrollSubjects);

app.listen(port, () =>
  console.log(`servidor iniciado en http://localhost:${port}`)
);
