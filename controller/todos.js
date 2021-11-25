import mongoose from "mongoose";
import Todo from "../models/todos.js"

export const getTodos = async(req,res) => {
    try{
        const Todos = await Todo.find();
        res.status(200).json(Todos);
    }
    catch(error)
    {
        res.status(400).json({message: error.message});
    }
};

export const createTodos = async(req,res) => {
    const todo = new Todo(req.body);
    console.log(req.body);
    
    try{
        await todo.save();
        res.status(200).json(todo);
    }
    catch(error)
    {
        res.status(400).json({message: error.message});
    }
};

export const deleteTodo = async(req,res) => {
    const {id} = req.params;
    console.log("Entra",id);
    if(!Todo.findById(id)) return res.status(404).json({message: 'That ID is not valid.'});

    await Todo.findByIdAndRemove(id);
    return res.status(200).json({message: 'The item was successfully removed.'});
};