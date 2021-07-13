const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(express.static(path.join(__dirname, "build")));

const postsRouter = require("./controllers/posts");

app.use("/", postsRouter);
app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("0"); // change this string to ensure a new version deployed
});

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

module.exports = app;
