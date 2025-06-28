const express = require("express");

const { createUser, findUserByEmail } = require("./controllers/userController");
const app = express();

app.use((req, res, next) => {
  // find complete URL of the request

  console.log("req. params is -----------", req.params);

  let protocol = req.protocol;
  let host = req.get("host");
  let path = req.originalUrl;
  let completeUrl = `${protocol}://${host}${path}`;

  console.log(`Complete URL: ${completeUrl}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the API",
    status: "success",
  });
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "API is healthy",
    status: "success",
  });
});

app.post("/create", createUser);

app.get("/user", findUserByEmail);

module.exports = app;
