const model = require("../models/taskModel");

// GET
exports.getAllTasks = (req, res) => {
  res.json(model.getTasks());
};

// POST
exports.createTask = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text required" });
  }

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  model.addTask(newTask);
  res.json(newTask);
};

// PUT
exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  model.updateTask(id);
  res.json({ message: "Task updated" });
};

// DELETE
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  model.deleteTask(id);
  res.json({ message: "Task deleted" });
};