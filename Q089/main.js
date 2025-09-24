const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/', (req, res) => {
  if (process.env.FEATURE_NEW_HOME === 'true') {
    res.send('Welcome to the NEW Home Page!');
  } else {
    res.send('Welcome to the Classic Home Page.');
  }
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
  console.log(`FEATURE_NEW_HOME is ${process.env.FEATURE_NEW_HOME === 'true' ? 'ENABLED' : 'DISABLED'}`);
});
