const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// In-memory database
let tasks = [
  { id: 1, text: "Learn Node", completed: false }
];

// 📥 GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// ➕ CREATE task
app.post("/api/tasks", (req, res) => {
  const { text } = req.body;
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };
  tasks.push(newTask);
  res.json(newTask);
});

// ✏️ UPDATE task
app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  res.json({ message: "Task updated" });
});

// ❌ DELETE task
app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});