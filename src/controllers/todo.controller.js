const ToDoService = require('../services/todo.service.js');
const TodoController = {};

TodoController.getAllToDos = async (req, res) => {
    try {
        const toDos = await ToDoService.getAllToDos();
        res.status(200).json({
            toDos = toDos,
        });
    } catch (error) {
        res.status(400);
    }
}

export default TodoController;