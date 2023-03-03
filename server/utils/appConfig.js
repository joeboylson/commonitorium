require("express-async-errors");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const elasticsearch = require("elasticsearch");

// routers
const { authenticationRouter, searchRouter } = require("../routes");

const sessionConfig = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  },
});

const cookieParserConfig = cookieParser();

const bodyParserConfig = bodyParser.json();

const corsConfig = cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
});

const db = new elasticsearch.Client({
  hosts: ["elasticsearch:9200"],
});

const createApp = () => {
  const app = express();
  app.use(sessionConfig);
  app.use(cookieParserConfig);
  app.use(bodyParserConfig);
  app.use(corsConfig);

  // use routers
  app.use("/authenticate", authenticationRouter);
  app.use("/search", searchRouter);

  // set db
  app.set("db", db);

  return app;
};

const startApp = (app) => {
  console.log(process.env);

  const db = app.get("db");
  db.ping({ requestTimeout: 30000 }, (error) => {
    if (error) return console.error("Elasticsearch cluster is down!");
    return console.log("elasticsearch: 9200");
  });

  console.log("express: 8000");
  app.listen(8000);
};

module.exports = {
  createApp,
  startApp,
};
