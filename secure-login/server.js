const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", require("./routes/authRoutes"));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});