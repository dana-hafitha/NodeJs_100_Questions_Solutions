const express = require('express');
const app = express();

let cache = {
  data: null,
  expiry: 0
};

async function fetchData() {
  return { message: 'Hello World', time: new Date().toISOString() };
}

app.get('/data', async (req, res) => {
  const now = Date.now();

  if (cache.data && now < cache.expiry) {
    return res.json({ cached: true, ...cache.data });
  }

  const data = await fetchData();

  cache = {
    data,
    expiry: now + 5000
  };

  res.json({ cached: false, ...data });
});

app.listen(4000);