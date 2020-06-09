const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const knex = require("knex");
const config = require("./knexfile").development;
const db = knex(config);

const app = express();
app.use(cors());
//const db = require("knex")("./knexfile").development;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", (req, res) => {
  db.select("*")
    .from("users")
    .then((result) => res.send(result));
});

app.post("/userLogin", (req, res) => {
  const { user_name, email, password } = req.body;
  console.log(req.body);
  db.select(`*`)
    .from("users")
    .where({
      user_name,
      email,
      password,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((result) => {
      console.log("error");
      res.send("not find user");
    });
});

const port = process.env.PORT || 4000;
var server = http.createServer(app);

server.listen(port, () => {
  console.log(port);
  console.log("start serve");
});
