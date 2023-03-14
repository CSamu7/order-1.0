const express = require("express")
const { getTask, postTask, deleteTask, patchTask, getAllTasks } = require("../controllers/taskController")
const taskRouter = express.Router()

taskRouter.get("/:guid", getTask)
taskRouter.get("/", getAllTasks)
taskRouter.post("/", postTask)
taskRouter.put("/:guid", patchTask )
taskRouter.delete("/:guid", deleteTask)

module.exports = taskRouter