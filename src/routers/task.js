const express = require('express')
const router = new express.Router()
const Tasks = require('../models/task')
const auth = require('../middleware/auth')


router.post('/tasks', auth, async (req, res) => {
    const task = new Tasks({
        ...req.body,
        owner: req.user._id
    })
    try {
        const tasks = await task.save()
        res.status(201).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})
//Get /tasks?completed=true
//Get /tasks?limit=10?skip=20
//Get /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'userTasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.status(200).send(req.user.userTasks)
    } catch (e) {
        res.status(404).send(e)
    }

})
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {

        // const task = await Tasks.findById(_id)
        const task = await Tasks.findOne({ _id, owner: req.user._id })
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['description', 'completed']
    const isValidOperaton = updates.every((update) => allowedUpdate.includes(update))

    if (!isValidOperaton) {
        return res.status(400).send({ error: 'Update is invalid!' })
    }
    try {
        const task = await Tasks.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])

        await task.save()

        res.send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/tasks/:id', auth, async (req, res) => {

    try {
        const task = await Tasks.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            res.status(404).send('can not found task')
        }
        await task.remove()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router