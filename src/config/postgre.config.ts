const Sequelize = require("sequelize");
export const db = new Sequelize("nodejsrest", "postgres", "nextPass21", {
  dialect: "postgres",
  host: "localhost",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
