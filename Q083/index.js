const express = require("express");
const axios = require("axios");

// ----- Service B (calculator) -----
const serviceB = express();

serviceB.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ sum: a + b });
});

serviceB.listen(4000, () => {
  console.log("Service B running on http://localhost:4000");
});

// ----- Service A (proxy with retries) -----
const serviceA = express();

async function callWithRetries(url, maxRetries = 3, delayMs = 500) {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      console.log(`Attempt ${attempt + 1}...`);
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      attempt++;
      console.error(`Error on attempt ${attempt}: ${err.message}`);

      if (attempt >= maxRetries) {
        throw new Error("All retries failed");
      }

      await new Promise(res => setTimeout(res, delayMs));
    }
  }
}

serviceA.get("/sum", async (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  try {
    const url = `http://localhost:4000/sum?a=${a}&b=${b}`;
    const result = await callWithRetries(url, 3, 1000);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

serviceA.listen(3000, () => {
  console.log("Service A running on http://localhost:3000");
});