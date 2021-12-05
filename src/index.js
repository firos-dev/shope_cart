const express = require('express')
require('./db/mongoose')
// const userRouter = require('./routers/user') User Auth is with Auth0
const productRouter = require('./routers/product')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const { auth } = require('express-openid-connect');

const app = express()
const port = process.env.PORT || 3001

/**
 * Auth0 configuration
 */
app.use(
  auth({
    authRequired: true,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    // idpLogout:  process.env.,
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(userRouter) User Auth is with Auth0
app.use(productRouter)


app.listen(port, () => {
    console.log('app running on ' + port);
})