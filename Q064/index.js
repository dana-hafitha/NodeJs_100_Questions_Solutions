const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://app.example.com'
}));

app.get('/', (req, res) => {
  res.send('CORS enabled for https://app.example.com only');
});

app.listen(3000);