const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", blogRoutes);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});