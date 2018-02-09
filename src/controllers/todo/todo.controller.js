/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /posts               ->  getAll
 */

const Todo = require('../../models/todo');

exports.getAll = function (req, res) {

    const newTodo = new Todo({
        text: 'Cook dinner',
        completed: true,
        completedAt: 123
    });

    newTodo.save().then((doc) => {
        res.json(doc);
    }, (e) => {
        console.log('Unable to save todo');
    });
};


