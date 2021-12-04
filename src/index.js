const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(userRouter)
app.use(productRouter)


app.listen(port, () => {
    console.log('app running on ' + port);
})