const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "your_secret_key";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "testuser" && password === "mypassword") {
    const userId = 123;
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.json({ error: "Invalid credentials" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});