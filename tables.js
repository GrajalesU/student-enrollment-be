const sequelize = require("./config/db");
const { Teacher, Student, Subject } = require("./models");

const tables = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
    await sequelize.sync();
    console.log("Modelos sincronizados correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}; //Execute to verify the tables
tables();
