const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  const result = await user.save();

  const { password, ...data } = result.toJSON();

  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user.id }, "secret");

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, //1 day
  });

  //   const { password, ...data } = user.toJSON();

  const { password, ...data } = user.toJSON();

  res.send(data);
});

router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, "secret");

    const user = await User.findByPk(claims.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const { password, ...data } = user.toJSON();

    res.send(data);
  } catch (err) {
    return res.status(401).send({ message: "unauthenticated" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.send({
    message: "success",
  });
});

module.exports = router;
