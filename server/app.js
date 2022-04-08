const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express(); //create express app

// connect to mlab database
// make sure to replace my db name and creds with yours
mongoose.connect(
  // "mongodb+srv://saurabhshah23:test1234@graphqlreact.p9ht3.mongodb.net/GraphQLReact?retryWrites=true&w=majority"
  // "mongodb://saurabhshah23:test1234@graphqlreact.p9ht3.mongodb.net/GraphQLReact?retryWrites=true&w=majority"
  "mongodb+srv://saurabhshah23:balG1MjnZZBiQkEr@graphqlreact.p9ht3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to mongo db.");
});

// middleware for graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening for requests on port 4000.");
});
