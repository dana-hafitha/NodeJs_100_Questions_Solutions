const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`${socket.id} joined room ${room}`);
    socket.emit("message", `You joined room ${room}`);
  });

  socket.on("sendMessage", ({ room, message }) => {
    io.to(room).emit("message", `The message is: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});