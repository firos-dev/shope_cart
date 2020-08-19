const express = require('express')
const router = new express.Router()
const Product = require('../models/product')
const auth = require('../middleware/auth')

router.get('/product', auth, async (req, res) => {
    try {
        const products = await Product.find({})
        if (!products) {

            res.status(404).send()
        }

        res.send(products)
    } catch (e) {

    }
})
router.post('/product', auth, async (req, res) => {
    const products = new Product(req.body)
    try {
        await products.save()
        res.status(201).send()
    } catch (e) {
        res, status(500).send(e)
    }
})
module.exports = router