const express = require("express");
const connectDB = require("./config/db");
const route = require("./routes");
const app = express();
// const getUsers = require("./routes/register");
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to AJPay Server");
});
app.use(express.json());

// getUsers(app);

app.use("/api/test", require("./routes/test"));
route(app);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
