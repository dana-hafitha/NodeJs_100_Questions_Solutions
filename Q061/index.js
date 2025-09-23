const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = "secret_key";

function verifyJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({ message: 'Invalid or expired token' });
  }
}

app.get('/protected', verifyJWT, (req, res) => {
  res.json({ message: 'You have access', user: req.user });
});

app.listen(3000);