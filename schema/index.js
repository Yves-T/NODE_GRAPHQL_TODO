import {
    GraphQLSchema,
} from 'graphql';

import {
    types,
} from '../types';

export let schema = new GraphQLSchema({
    query: types.queryType,
    mutation: types.MutationType,
});
