const express = require('express');
import ToDoController from '../controllers/todo.controller.js';

const router = express.router();

router.get('/',(req, res) => ToDoController.getAllToDos());

export default router;