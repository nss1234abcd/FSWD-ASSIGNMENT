const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// ROUTES

// Home
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server 👋" });
});

// Time
app.get("/api/time", (req, res) => {
  res.json({ time: new Date().toLocaleTimeString() });
});

// User
app.get("/api/user", (req, res) => {
  res.json({
    name: "Nutan",
    role: "Developer",
    status: "Active"
  });
});

// Dynamic route
app.get("/api/greet/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}! 🎉` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});