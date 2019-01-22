
//graphql server

import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';
import { makeExecutableSchema} from 'graphql-tools';
import typeDefs form './schema';
import resolvers form './resolvers';

const schema = makeExecutableSchema({
	typeDefs, 
	resolvers,
});


const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(PORT);