const Todo = require('../models/todoModel');

async function getTodos(req, res) {
    let todos = await Todo.find({});
    res.send(todos);
}

function createTodo(req, res) {
    let todos = new Todo(req.body);
    todos.save();
    res.send('ADDED SUCCESSFULLY');
}

function updateTodo(req, res) {
    let id = req.params.id;
    let todos = req.body;
    Todo.findByIdAndUpdate(id, todos).exec();
    res.send('EDITED SUCCESSFULLY');
}

function deleteTodo(req, res) {
    let id = req.params.id;
    Todo.findByIdAndDelete(id).exec();
    res.send('DELETED SUCCESSFULLY');
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
