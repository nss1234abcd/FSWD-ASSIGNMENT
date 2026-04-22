const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);

// frontend
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});