require("dotenv").config();

const express = require("express");
const app = express();

const { PORT, PG_URI } = process.env;

const startServer = async () => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
};

try {
  startServer();
} catch (e) {
  console.log("server failed", e);
}
