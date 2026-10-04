const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("register_jwt_auth", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
