const elasticsearch = require("elasticsearch");

const indicesNames = ["quotes"];

// instantiate an Elasticsearch client
const db = new elasticsearch.Client({
  hosts: ["elasticsearch:9200"],
});

// ping the client to be sure Elasticsearch is up
db.ping({ requestTimeout: 30000 }, (error) => {
  if (error) return console.error("Elasticsearch cluster is down!");

  console.log("elasticsearch: 9200");

  createIndices();
});

const createIndices = () => {
  indicesNames.forEach((index, i) => {
    db.indices.create({ index }, (error, response, status) => {
      if (error) return console.log(error);
      console.log("created a new index:", response);
    });
  });
};

// // add 1 data to the index that has already been created
// loadIndexclient.index(
//   {
//     index: indexNameLoading,
//     type: "cities_list",
//     body: {
//       Key1: "Content for key one",
//       Key2: "Content for key two",
//       key3: "Content for key three",
//     },
//   },
//   function (error: any, response: any, status: any) {
//     console.log(response);
//   }
// );

// // require the array of cities that was downloaded
// const cities = require(dataJsonFile);
// // declare an empty array called bulk
// let bulk: any = [];
// //loop through each city and create and push two objects into the array in each loop
// //first object sends the index and type you will be saving the data as
// //second object is the data you want to index
// cities.forEach((city: any) => {
//   bulk.push({
//     index: {
//       _index: indexNameLoading,
//       _type: "cities_list",
//     },
//   });
//   bulk.push(city);
// });
// //perform bulk indexing of the data passed
// loadIndexclient.bulk({ body: bulk }, function (err: any, response: any) {
//   if (err) {
//     // @ts-ignore
//     console.log("Failed Bulk operation".red, err);
//   } else {
//     // @ts-ignore
//     console.log("Successfully imported %s".green, cities.length);
//   }
// });
