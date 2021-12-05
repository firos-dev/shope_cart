const jwt = require('jsonwebtoken')
const User = require('../models/user')

/**
 * !! Not Using
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const auth = async (req, res, next) => {

    try {
        const { cookies } = req
        const token = cookies.JWT_token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE)
        const user = await User.findOne({ _id: decoded._id })

        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(404).send({ error: 'please authenticate' })
    }
    
}
module.exports = auth