const elasticsearch = require("elasticsearch");

const { quotes } = require("./quotes");

const index = "quotes";

const db = new elasticsearch.Client({
  hosts: ["elasticsearch:9200"],
});

db.ping(
  {
    requestTimeout: 30000,
  },
  (error) => {
    if (error) return console.error("Elasticsearch cluster is down!");
    console.log("elasticsearch: 9200");
    seedQuotes();
  }
);

const seedQuotes = () => {
  db.deleteByQuery(
    {
      index,
      body: {
        query: {
          match_all: {},
        },
      },
    },
    (error, response) => console.log(response)
  );

  quotes.forEach((quote) => {
    db.index(
      {
        index,
        body: {
          ...quote,
        },
      },
      (error, response, status) => console.log(response)
    );
  });
};
