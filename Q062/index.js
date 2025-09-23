const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const users = [];

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password){
     return res.status(400).send('Username and password required');
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.send('User registered successfully!');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send('Invalid password');

  res.send('Login successful!');
});

app.listen(3000);