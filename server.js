const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 4000;
var server = http.createServer(app);

server.listen(port, () => {
  console.log("start serve");
});
