const express = require("express");
const { ToDoModel } = require("../model/ToDo");

const todoRouter = express.Router();

// CRUD Routes
todoRouter.get('/', async (req, res) => {
    // Return all TODOs from DB
    const allTODs = await ToDoModel.find({})
    res.json(allTODs)
})

todoRouter.post('/', async (req, res) => {
    const userGivenTODO = req.body;
    const todoRes = await ToDoModel.create(userGivenTODO)
    res.json({
        message: "Your TODO is created...",
        id: todoRes._id
    })
})

todoRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const userGivenTODO = req.body;
    await ToDoModel.findByIdAndUpdate(id, userGivenTODO)
    // Return all TODOs from DB
    res.json({
        message: "Your TODO is updated..."
    })
})

todoRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await ToDoModel.findByIdAndDelete(id)
    res.json({
        message: "Your TODO is deleted..."
    })
})


module.exports = {
    todoRouter
}
