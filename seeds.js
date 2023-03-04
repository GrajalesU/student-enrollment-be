const { Student, Teacher, Subject } = require("./models");

const seedData = async () => {
  try {
    // Crear profesores
    const teacher1 = await Teacher.create({
      name: "John Smith",
    });
    const teacher2 = await Teacher.create({
      name: "Jane Doe",
    });

    // Crear estudiantes
    const student1 = await Student.create({
      name: "Bob Johnson",
    });
    const student2 = await Student.create({
      name: "Alice Brown",
    });
    const student3 = await Student.create({
      name: "Sofia García",
    });
    const student4 = await Student.create({
      name: "Juan Pérez",
    });
    const student5 = await Student.create({
      name: "Carla González",
    });
    const student6 = await Student.create({
      name: "Diego Fernández",
    });
    const student7 = await Student.create({
      name: "Ana López",
    });
    const student8 = await Student.create({
      name: "Gabriel Martínez",
    });

    // Crear materias
    const subject1 = await Subject.create({
      name: "Matemáticas",
      teacherId: teacher1.id,
    });
    const subject2 = await Subject.create({
      name: "Inglés",
      teacherId: teacher2.id,
    });
    const subject3 = await Subject.create({
      name: "Historia",
      teacherId: teacher1.id,
    });
    const subject4 = await Subject.create({
      name: "Física",
      teacherId: teacher2.id,
    });
    const subject5 = await Subject.create({
      name: "Biología",
      teacherId: teacher1.id,
    });
    const subject6 = await Subject.create({
      name: "Literatura",
      teacherId: teacher2.id,
    });
    const subject7 = await Subject.create({
      name: "Programación",
      teacherId: teacher1.id,
    });

    // Asociar estudiantes y materias
    await student1.addSubject(subject1);
    await student1.addSubject(subject2);
    await student2.addSubject(subject1);
    await student2.addSubject(subject3);
    await student3.addSubject(subject1);
    await student3.addSubject(subject4);
    await student4.addSubject(subject2);
    await student4.addSubject(subject5);
    await student5.addSubject(subject3);
    await student5.addSubject(subject6);
    await student6.addSubject(subject4);
    await student6.addSubject(subject7);
    await student7.addSubject(subject5);
    await student7.addSubject(subject6);
    await student8.addSubject(subject7);
  } catch (error) {
    console.error(error);
  }
};

seedData();
