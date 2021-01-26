const ToDoModel = require('../models/todo.model.js');
const ToDoService = {}

TodoController.getAllToDos = async () => {
    return await ToDoModel.find({});
}
