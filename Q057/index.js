const express = require("express");
const sanitizeHtml = require("sanitize-html");

const app = express();

app.get("/", (req, res) => {
  const name = req.query.name || "";
  const safe = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
  res.send(`Hello, ${safe}!`);
});

app.listen(4000, () => {
  console.log("Server running on port 4000")
});