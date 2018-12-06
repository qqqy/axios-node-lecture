const express = require ('express')
const PORT = 4001
const ctrl = require('./controllers/mainController')

const app = express();

app.use(express.json())


app.get('/api/test', ()=> console.log('test'))

app.get('/api/todos', ctrl.getAll)

app.post('/api/todo' , ctrl.createOne)

app.listen(PORT, () => console.log(`Listening for breathing on port ${PORT}`))