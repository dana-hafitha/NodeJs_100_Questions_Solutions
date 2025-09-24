const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = 'type Query {hello: String}';

const resolvers = {Query: {hello: () => "Hello",}};

const server = new ApolloServer({typeDefs,resolvers});

const start = async () => {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`Server ready at ${url}`);
}

start();