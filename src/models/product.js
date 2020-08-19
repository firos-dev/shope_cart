const mongoose = require('mongoose')
const validator = require('validator')

const Product = mongoose.model('products', {
    name: {
        type: String,
        trim: true,
        required: true
    },
    model: {
        type: String,
        uppercase: true,
        trim: true,
        required: true
    },
    quantity: {
        required: true,
        type: Number,
        trim: true,
        validate(value) {
            if (value < 0) {
                throw mongoose.Error('Value must be positive number!')
            }
        }
    }
})
module.exports = Product