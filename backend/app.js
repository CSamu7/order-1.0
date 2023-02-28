const express = require("express")
const dotenv = require("dotenv")
const taskRouter = require("./routes/task.routes.js")

dotenv.config()
const app = express()

app.use(express.json())
app.use(taskRouter)
app.use("/api/v1/task", taskRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor levantado")
})