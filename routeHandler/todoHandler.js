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
router.get('/:id', async (req, res) => {
    try {
         const todo =  await Todo.findById(req.params.id)
         if(todo) {
            res.status(200).json(todo);
         } else {
            res.status(404).json({message: 'can not get by id'})
         }
       
    } catch (err) {
        res.status(500).json(err.message);
    }
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
    try {
        const todo = await Todo.insertMany(req.body)
        res.status(200).json({message: 'inserted successfully'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
   

})

// put todo

router.put('/:id', async (req, res) => {
    try {
        await Todo.updateOne({_id: req.params.id}, {
            $set: {
                status: 'active',
            }
        })
        res.status(200).json({message: 'updated successfully'})
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err)
    }
})

// delete todo

router.delete('/:id', async (req, res) => {
    try {
        await Todo.deleteOne({_id: req.params.id})
        res.status(200).json({message: 'Delete successfully'})
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err)
    }
})

module.exports = router