const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
const saltRounds = 10;

const router = express.Router();

// health check

router.get("/", (request, response) => {
  response.send("User Route root");
});

// save session value
router.get("/save", (request, response) => {
  request.session.testProperty = "testing that this string gets saved";
  response.send("OK");
});

// retrieve saved session value
router.get("/retrieve", (request, response) => {
  response.send(request.session.testProperty);
});

router.post("/login", (request, response) => {
  UserModel.findOne({ username: request.body.username }).then((userData) => {
    if (userData) {
      const checkHashPassword = bcrypt.compareSync(
        request.body.password,
        userData.password
      );
      if (checkHashPassword) {
        response.send("Logged in");
      } else {
        response.status(401).send("Invalid username or PASSWORD");
      }
    } else {
      response.status(401).send("Invalid USERNAME or password");
    }
  });
});

router.get("/logout", (request, response) => {
  request.session.loggedIn = false;
  response.send("User has logged out!");
});

router.get("/expire-session", (request, response) => {
  request.session.destroy(() => response.send("Session Expired"));
});

router.post("/register", (request, response) => {
  const body = request.body;
  console.log("user register body:", body);
  const passwordHash = bcrypt.hashSync(body.password, saltRounds);
  console.log("passwordHash:", passwordHash);

  const user = { username: body.username, password: passwordHash };
  console.log("user:", user);

  UserModel.create(user).then((userData) => {
    response.send(userData);
  });
});

module.exports = router;
