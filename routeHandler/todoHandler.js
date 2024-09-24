const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schema/todoSchema')
const Todo = new mongoose.model('Todo',todoSchema)
// get the all router todo

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ error: 'There was an error retrieving todos' });

    }
})


// get the by id
router.get('/todo/:id', async (req, res) => {

})

// post todo

router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        const savedTodo = await newTodo.save();
        res.status(200).json({
            message: 'Todo saved successfully',
            todo: savedTodo
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was an error saving the todo'
        });
    }
});

// post todo

router.post('/', async (req, res) => {

})

// post multiple todo

router.post('/all', async (req, res) => {

})

// put todo

router.put('/:id', async (req, res) => {

})

// delete todo

router.delete('/:id', async (req, res) => {

})

module.exports = router