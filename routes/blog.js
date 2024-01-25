const express = require("express");
const router = express.Router();
const multer = require("multer");
const mime = require("mime-types");
const {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  addManyBlogs,
  filter,
} = require("../controllers/Blog");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    // Get the original file extension from the MIME type
    const extension = mime.extension(file.mimetype);

    // Use the original extension if available, otherwise generate one
    const finalExtension = extension ? `.${extension}` : "";

    cb(null, file.fieldname + "-" + uniqueSuffix + finalExtension);
  },
});

const upload = multer({ storage: storage });

router.get("/", getAllBlogs);
router.get("/filter", filter);
router.get("/:id", getSingleBlog);
router.post("/", upload.single("image"), addBlog);
router.post("/many", addManyBlogs);

module.exports = router;
