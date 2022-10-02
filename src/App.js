import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import React, { Component } from 'react';
import TaskList from './components/TaskList'

const url = 'http://localhost:8000/todos'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }
  addTodo = (title)=> {
    const newTodo = {
      title: title
    }
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <InputField
          addTodoMethod={this.addTodo}
        />
        <TaskList
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
