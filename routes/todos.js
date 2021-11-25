import express from "express";
import { createTodos, getTodos, deleteTodo } from "../controller/todos.js";

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodos);
router.delete('/:id', deleteTodo);

export default router;