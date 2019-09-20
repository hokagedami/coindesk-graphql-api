const { GraphQLServer }  = require('graphql-yoga');
const resolvers = require('./modules/resolvers');






const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers
});

const options = {
    port: 1500,
    endpoint: '/graphql',
    playground: '/graphql',
};
server.start(options, ({ port }) => console.log(`Server is running on port ${port}`));
