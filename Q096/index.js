const express = require("express");
const env = require("./validate.js");

const app = express();

app.get("/", (req, res) => {
  res.send("App is running!");
});

app.listen(env.PORT, () => {
  console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});
