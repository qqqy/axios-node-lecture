import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      todos: []
    }
  }

  componentDidMount(){
    axios.get('/api/todos')
      .then(res => {
        console.log(res)
        this.setState({
          todos: res.data
        })
      })
  }

  handleChange(val){
    this.setState({
      input: val
    })
  }

  handleClick (){
    console.log('I clicked!')
    console.log(this.state.input)
    axios.post('/api/todo', {text: this.state.input})
    .then(res => {
      console.log(res)
      this.setState ({
        todos: res.data
      })
    })
  }
  render() {
    const displayTodos = this.state.todos.map(todoItem => {
      return <li key={todoItem.id}>{todoItem.text}</li>
    })
    return (
      <div className="App">
        {displayTodos}
        <input onChange={e => this.handleChange(e.target.value)} />
        <button onClick={() => this.handleClick()} >Add</button>
      </div>
    );
  }
}

export default App;
