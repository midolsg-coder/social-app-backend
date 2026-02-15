const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentsByPost,
  deleteComment,
} = require("../controllers/commentController");

const protect = require("../middleware/authMiddleware");

// CREATE COMMENT
router.post("/:postId", protect, createComment);

// GET COMMENTS FOR POST
router.get("/:postId", getCommentsByPost);

// DELETE COMMENT
router.delete("/:id", protect, deleteComment);

module.exports = router;