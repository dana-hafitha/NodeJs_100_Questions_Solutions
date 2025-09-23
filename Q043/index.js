const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Error : Email is required');
  }

  res.end(`User email created: ${email}`);
});

app.listen(3000);