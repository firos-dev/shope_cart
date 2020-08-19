const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const productRouter = require('./routers/product')


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(productRouter)


app.listen(port, () => {
    console.log('app running on ' + port);
})
// const Tasks = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const user = await User.findById('5f38d55bbcbf1b102c140efb')
//     // await user.populate('userTasks').execPopulate()

//     // console.log(user.userTasks);

//     const task = await Tasks.findById('5f38d6797228cc2eb443981e')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner);
// }
// main()