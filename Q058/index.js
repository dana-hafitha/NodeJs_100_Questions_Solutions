const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000);