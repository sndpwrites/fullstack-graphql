const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, db } = require("./db");

const server = new ApolloServer({
  context({ req }) {
    //add authentication here
    // const jwt = req.headers.jwt
    //throw new Error("Not Authorized")
    return {
      models,
      db,
    };
  },
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
