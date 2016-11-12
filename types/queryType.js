import {
    GraphQLObjectType,
    GraphQLList,
} from 'graphql';
import {
    TodoType,
} from './todoType';
import {
    TODO,
} from '../data/todo.js';

export let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {

            todos: {
                type: new GraphQLList(TodoType),
                resolve: function () {
                    return new Promise(function (resolve, reject) {
                        TODO.find((err, todos) => {
                            if (err) reject(err);
                            else resolve(todos);
                        });
                    });
                },
            },

        };
    },
});
