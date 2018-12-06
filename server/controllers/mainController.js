let todos = []

let id = 1;

module.exports = {

  createOne: (req, res) => {
    console.log('Post endpoint is firing')
    console.log(req.body)
    let newTodo ={
      id: id,
      text: req.body.text
    }
    todos.push(newTodo)
    console.log(todos)
    id++;
    res.status(200).send(todos)
  },

  getAll: (req, res) => {
    res.status(200).send(todos)
  }
}