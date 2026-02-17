const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ======================
// CORS (РАБОЧИЙ ВАРИАНТ)
// ======================
app.use(cors());
app.options("*", cors());

// ======================
// MIDDLEWARE
// ======================
app.use(express.json());

// ======================
// ПРОВЕРКА ENV
// ======================
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI missing");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET missing");
  process.exit(1);
}

// ======================
// ПОДКЛЮЧЕНИЕ MONGODB
// ======================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB подключен"))
  .catch((err) => {
    console.error("❌ Ошибка подключения MongoDB:", err);
    process.exit(1);
  });

// ======================
// ROUTES
// ======================
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/postRoutes"));
app.use("/api", require("./routes/commentRoutes"));

// ======================
// ТЕСТОВЫЙ ROUTE
// ======================
app.get("/", (req, res) => {
  res.send("API работает 🚀");
});

// ======================
// ЗАПУСК СЕРВЕРА
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});