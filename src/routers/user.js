const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')
const { Error } = require('mongoose')

router.post('/api/register/user', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json(e)
    }
})
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findUserByCred(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('JWT_token', token, {
            httpOnly: true
        });
        res.json(user)
    } catch (e) {
        res.status(400).json()
    }
})


router.post('/api/user/logout', auth, async (req, res) => {
    try {
        res.cookie('JWT_token', {
            maxAge: 0,
            httpOnly: true
    })
        res.json('Success')
    } catch (e) {
        res.status(500).json(e)
    }
})


module.exports = router