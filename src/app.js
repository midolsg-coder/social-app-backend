const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Polet Messenger server is running 🚀");
});
app.use("/api/auth",
     require("./routes/authRoutes"));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});