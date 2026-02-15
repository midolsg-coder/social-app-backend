require("dotenv").config();
console.log("ENV:", process.env);
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Подключаем маршруты
app.use('/api/auth', authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", require("./routes/commentRoutes"));

// Подключение MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB подключена"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});