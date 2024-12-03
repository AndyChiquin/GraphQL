const { ApolloServer, gql } = require('apollo-server');

// Definir el esquema de GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolver para la consulta "hello"
const resolvers = {
  Query: {
    hello: () => 'Hello World - GraphQL',
  },
};

// Crear y configurar el servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL corriendo en ${url}`);
});
