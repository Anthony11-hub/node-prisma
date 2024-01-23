const express = require("express");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/User");

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
