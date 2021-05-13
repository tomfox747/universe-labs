const path = require("path");
const express = require("express");
const app = express(); // create express app
const bodyParser = require("body-parser")

const dataRouter = require('./routers/dataRouter')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("client"));

app.use('/data', dataRouter)

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app