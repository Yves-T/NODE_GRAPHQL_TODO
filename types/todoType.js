import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
} from 'graphql';

export let TodoType = new GraphQLObjectType({
    name: 'todo',
    fields: function () {
        return {
            id: {
                type: GraphQLID,
            },
            title: {
                type: GraphQLString,
            },
            completed: {
                type: GraphQLBoolean,
            },
        };
    },
});
