const express = require("express");

const connectDB = require("./config/db");
const route = require("./routes");
const establishSession = require("./services/session");
const app = express();
// const getUsers = require("./routes/register");
connectDB();
establishSession(app);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to AJPay Server");
});
app.use(express.json());

// getUsers(app);

app.use("/api/test", require("./routes/test"));
route(app);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
