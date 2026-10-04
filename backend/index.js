const express = require("express");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("register_jwt_auth", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.log("connection failed:", err));

app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send(body, "hello");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
