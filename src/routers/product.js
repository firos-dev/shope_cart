const express = require('express')
const router = new express.Router()
const Product = require('../models/product')
const auth = require('../middleware/auth')



router.post('/api/get/products', async (req, res) => {
  

    try {
        const products = await Product.find({})
        if (!products) {

            res.status(404).json()
        }

      res.json(products)
      console.log(products);
    } catch (e) {

    }
})
router.post('/api/create/product', async (req, res) => {
    const products = new Product(req.body)
    try {
        await products.save()
        res.status(201).send(products)
    } catch (e) {
        res, status(500).send(e)
    }
})
module.exports = router