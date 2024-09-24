const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schema/todoSchema')
const Todo = new mongoose.model('Todo',todoSchema)
// get the all router todo

router.get('/todo', async (req, res) => {
    
})


// get the by id
router.get('/todo/:id', async (req, res) => {

})

// post todo

router.post('/todo', async (req, res) => {
    const newTodo = await new Todo(req.body)
    await newTodo.save((error) => {
        if (error) {
            res.status(500).json({
                error: 'There was an error saving'
            })
        } else {
            res.status(200).json({
                message: 'Success saving'
            })
        }
    })
})

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