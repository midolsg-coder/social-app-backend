const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== CONNECT MONGODB =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB подключен"))
  .catch(err => console.log(err));

// ===== ROUTES =====
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/postRoutes"));
app.use("/api", require("./routes/commentRoutes"));

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("API работает 🚀");
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(Сервер запущен на порту ${PORT});
});