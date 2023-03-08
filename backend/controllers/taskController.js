const connectDB = require("../helpers/connectDB")

const controller = {}
const connection = connectDB()

controller.getTask = (req, res) => {
  const query = `
  SELECT user.username, task.title, task.description, role.name as role_name, category.name as category_name FROM task
	JOIN user ON user.id_user = task.id_user
    JOIN role ON role.id_role = user.id_role
    JOIN category ON category.id_category = task.id_category
    WHERE task.id_user = ${req.params.guid}`
  
  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send(results)
  })   
}

controller.postTask = (req, res) => {
  const {title, id_category, description} = req.body

  if(!title || !id_category) return res.status(400).send("No title or category")
  
  let query = `INSERT INTO task (title, id_category, description) VALUES ("${title}", ${id_category}, "${description}");`

  connection.query(query, (err, results) => {
    console.log(err, results)
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send("Tarea añadida")
  })   
}

controller.patchTask = (req, res) => {
  const {title, id_category, description} = req.body

  let query = `UPDATE order_task.task SET title = '${title}', id_category = '${id_category}', description = '${description}' WHERE (id_task = ${req.params.guid});`

  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")
    
    if(results.length === 0) return res.status(404).send("No task")
    
    return res.send("Tarea modificada")
  })   
}

controller.deleteTask = (req, res) => {
  let query = `DELETE FROM task WHERE id_task = ${req.params.guid};`

  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")

    if(results.affectedRows === 0) return res.status(404).send("No task founded")

    res.send("deleted task")
  })
}

controller.getAllTasks = (req, res) => {
  let query = `SELECT * FROM TASK`

  connection.query(query, (err, results) => {
    if(err) return res.status(500).send("No server")

    return res.send(results)
  })
}

module.exports = controller