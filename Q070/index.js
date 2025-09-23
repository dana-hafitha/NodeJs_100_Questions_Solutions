const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = 'mongodb://localhost:27017/app';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log('DataBase connected successfully!');
    } catch (error) {
        console.error('Error connecting to the DataBase:', error.message);
    }
};

app.get("/", (req, res) => {
  res.send("Hello world!");
});


const my_server = app.listen(4000, async () => {
  await connectToDatabase();
  console.log("Server is runnning on port 4000")
});


async function gracefulShutdown() {
  console.log('Received SIGINT. Shutting down gracefully...');
  
  my_server.close(async (err) => {
    if (err) {
      console.error('Error closing server:', err);
    }

    try {
      await mongoose.disconnect();
      console.log('DB connection closed.');
    } catch (dbErr) {
      console.error('Error closing DB connection:', dbErr);
    }

    process.exit(0);
  });
}

process.on('SIGINT', gracefulShutdown);