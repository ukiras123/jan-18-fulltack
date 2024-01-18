const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const ToDoModel = mongoose.model('todo', todoSchema)
module.exports = { ToDoModel }