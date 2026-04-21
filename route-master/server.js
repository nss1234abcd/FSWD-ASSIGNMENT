const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// In-memory data
let books = [
  { id: 1, title: "React Basics", author: "John" },
];

let authors = [
  { id: 1, name: "John" },
];

// 📚 GET all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// ➕ Add book
app.post("/api/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: Date.now(), title, author };
  books.push(newBook);
  res.json(newBook);
});

// ✍️ GET authors
app.get("/api/authors", (req, res) => {
  res.json(authors);
});

// ➕ Add author
app.post("/api/authors", (req, res) => {
  const { name } = req.body;
  const newAuthor = { id: Date.now(), name };
  authors.push(newAuthor);
  res.json(newAuthor);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// ❌ DELETE book
app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((b) => b.id !== id);
  res.json({ message: "Book deleted" });
});

// ❌ DELETE author
app.delete("/api/authors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  authors = authors.filter((a) => a.id !== id);
  res.json({ message: "Author deleted" });
});