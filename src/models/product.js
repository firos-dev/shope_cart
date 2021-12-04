const mongoose = require('mongoose')
const validator = require('validator')

const Product = mongoose.model('products', {
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    stock: {
        type: Number,
        trim: true,
        required:true
    }
})
module.exports = Product