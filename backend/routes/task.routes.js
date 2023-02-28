const connectDB = require("../helpers/connectDB")
const express = require("express")
const connection = connectDB()
const taskRouter = express.Router()

const requireJsonContent = (request, response, next) => {
  if (request.headers['content-type'] !== 'application/json') {
      response.status(400).send('Server requires application/json')
  } else {
    next()
  }
}

taskRouter.get("/:guid", (req, res) => {
  let query = `SELECT * FROM task where id_task = ${req.params.guid};`
  
  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send(results)
  })   
})

taskRouter.post("/", (req, res) => {
  const {title, id_category, description} = req.body

  if(!title || !id_category) return res.status(400).send("No title or category")
  
  let query = `INSERT INTO task (title, id_category, description) VALUES ("${title}", ${id_category}, "${description}");`

  connection.query(query, (err, results) => {
    console.log(err, results)
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send("Tarea añadida")
  })   
})

taskRouter.put("/:guid", (req, res) => {
  const {title, id_category, description} = req.body

  let query = `UPDATE order_task.task SET title = '${title}', id_category = '${id_category}', description = '${description}' WHERE (id_task = ${req.params.guid});`

  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send("Tarea modificada")
  })   
})

taskRouter.delete("/:guid", (req, res) => {
  let query = `DELETE FROM task WHERE id_task = ${req.params.guid};`

  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")

    if(results.affectedRows === 0) return res.status(404).send("No task founded")

    res.send("deleted task")
  })
})

module.exports = taskRouter