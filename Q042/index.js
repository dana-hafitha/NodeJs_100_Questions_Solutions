const express = require('express');
const app = express();

app.get('/', (req, res) => {
  throw new Error('Something is Wrong');
});

app.get('/users', (req, res) => {
  throw new Error('Something is not right');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(3000);