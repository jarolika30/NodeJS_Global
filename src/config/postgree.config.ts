const Sequelize = require("sequelize");
const sequelize = new Sequelize("nodejsrest", "postgres", "nextPass21", {
  dialect: "postgres",
  host: "localhost"
});
