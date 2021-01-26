const mongoose = require('mongoose');

const { Schema } = mongoose;

const ToDoSchema = Schema({
    name: String,
});

const ToDoModel = mongoose.model('ToDos', ToDoSchema, 'todos');

export default ToDoModel;