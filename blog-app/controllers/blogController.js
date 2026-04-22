const Blog = require("../models/Blog");

// GET
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

// CREATE
exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  const blog = new Blog({ title, content, author });
  await blog.save();

  res.json(blog);
};

// UPDATE
exports.updateBlog = async (req, res) => {
  const id = req.params.id;

const updated = await Blog.findByIdAndUpdate(
  id,
  req.body,
  { returnDocument: "after" }
);

res.json(updated);
};

// DELETE
exports.deleteBlog = async (req, res) => {
  const id = req.params.id;

  await Blog.findByIdAndDelete(id);

  res.json({ message: "Deleted" });
};