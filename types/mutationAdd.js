import {
    TodoType,
} from './todoType';

import {
    TODO,
} from '../data/todo';

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

let MutationAdd = {
    type: TodoType,
    description: 'Add a Todo',
    args: {
        title: {
            name: 'Todo title',
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: (root, args) => {
        let newTodo = new TODO({
            title: args.title,
            completed: false,
        });
        newTodo.id = newTodo._id;
        return new Promise((resolve, reject) => {
            newTodo.save(function (err) {
                if (err) reject(err);
                else resolve(newTodo);
            });
        });
    },
};

export let MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        add: MutationAdd,
    },
});
