const express = require("express");
const connectDB = require("./config/db");
const route = require("./routes");
const establishSession = require("./services/session");

const app = express();

connectDB();

establishSession(app);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to AJPay Server");
});

app.use(express.json());

route(app);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
