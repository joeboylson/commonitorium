// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");

// const elasticClient = require("./elastic-client");

require("express-async-errors");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("OK")
});

app.listen(3000);
