import express from 'express';
import graphqlHTTP from 'express-graphql';
import {} from './data/db';

import {
    schema,
} from './schema';

let app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
}));

// start server
let server = app.listen(4000, () => {
    console.log('Listening at port', server.address().port);
});
