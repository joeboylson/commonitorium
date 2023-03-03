const express = require("express");

const searchRouter = express.Router();

searchRouter.get("/global", (request, response) => {
  const query = request.query.search;
  const db = request.app.get("db");

  /* Fuzzy Query Match */
  db.search({
    index: "quotes",
    body: {
      query: {
        multi_match: {
          query,
          fields: [
            "publication",
            "topictree",
            "author",
            "author_type",
            "quote",
          ],
          fuzziness: "auto",
        },
      },
    },
  })
    .then((results) => response.send(results))
    .catch((error) => response.send(error.message));
});

searchRouter.get("/all", (request, response) => {
  const db = request.app.get("db");

  /* Fuzzy Query Match */
  db.search({
    index: "quotes",
    body: {
      query: {
        match_all: {},
      },
    },
  })
    .then((results) => response.send(results))
    .catch((error) => response.send(error.message));
});

module.exports = {
  searchRouter,
};
