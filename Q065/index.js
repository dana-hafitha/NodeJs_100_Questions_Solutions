const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>File Upload Demo</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="avatar" />
      <button type="submit">Upload</button>
    </form>
  `);
});

// setting up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, name + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.send('No file uploaded.');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(4000, ()=>{
  console.log("Server is running on port 4000");
});