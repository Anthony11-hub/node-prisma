const express = require("express");
const router = express.Router();
const {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  addManyBlogs,
  filter,
} = require("../controllers/Blog");

router.get("/", getAllBlogs);
router.get("/filter", filter);
router.get("/:id", getSingleBlog);
router.post("/", addBlog);
router.post("/many", addManyBlogs);

module.exports = router;
