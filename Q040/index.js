const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);

  if (isNaN(userId)) {
    return res.end('Invalid user ID');
  }

  res.end(`id is ${userId}`);
});

app.listen(3000);