const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  }),
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("hello");
});

const port = 8000;

sequelize
  .sync()
  .then(() => {
    console.log("connected");
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`),
    );
  })
  .catch((err) => console.log("connection failed:", err));
