const express = require('express');
const redis = require('redis');

const app = express();

let client = redis.createClient();
client.on("connect", function () {
    console.log("Connection Successful!!");
});

// simulate database
async function fetchPostsFromDB() {
  return [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' }
  ];
}

app.get('/posts', async (req, res) => {
  const key = 'posts';

  try {
    const cached = await redis.get(key);
    if (cached) {
      return res.json({ cached: true, data: JSON.parse(cached) });
    }
    const posts = await fetchPostsFromDB();

    await redis.setEx(key, 60, JSON.stringify(posts));

    return res.json({ cached: false, data: posts });
  } catch (err) {
    console.error('Error:', err);
    res.json({ error: 'Server error' });
  }
});

app.listen(3000);