const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogController");

router.get("/blogs", controller.getBlogs);
router.post("/blogs", controller.createBlog);
router.put("/blogs/:id", controller.updateBlog);
router.delete("/blogs/:id", controller.deleteBlog);

module.exports = router;