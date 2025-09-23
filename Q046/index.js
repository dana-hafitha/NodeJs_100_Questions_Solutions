const express = require('express');
const app = express();

app.use(express.json());

let todos = [];
let Id = 0;

// CREATE
app.post('/todos', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) {
    return res.status(400).send('Title is required');
  }
  const newTodo = { id: Id++, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

//Get a single todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id, 10));
  if (!todo) {
    return res.status(404).send('Todo not found');
  }
  res.json(todo);
});

// Update a todo by id
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id, 10));
  if (!todo) {
    return res.status(404).send('Todo not found');
  }

  const { title, completed } = req.body;
  if (title !== undefined){
    todo.title = title;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }

  res.json(todo);
});

//Remove a todo by id
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id, 10));
  if (index === -1) {
    return res.status(404).send('Todo not found');
  }

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server
app.listen(3000);