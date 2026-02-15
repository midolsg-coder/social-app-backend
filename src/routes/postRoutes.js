const express = require("express");
const {
  createPost,
  getPosts,
  likePost,
  addComment
} = require("../controllers/postController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Создать пост
router.post("/", authMiddleware, createPost);

// Получить все посты
router.get("/", getPosts);

// Лайк
router.put("/:id/like", authMiddleware, likePost);

// Комментарий
router.post("/:id/comment", authMiddleware, addComment);

module.exports = router;