import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from "./src/resolvers";
import { typeDefs } from "./src/schema";

const PORT = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`🚀 Express server running on port ${PORT}`));