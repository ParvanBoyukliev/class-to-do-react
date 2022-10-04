import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import React, { Component } from 'react';
import TaskList from './components/TaskList'

const SERVER_URL = 'http://localhost:8000/tasks'
class App extends Component {
  constructor(props){
    super(props);
    this._initialized = false;
    this.state = {
      tasks: []
    }
    this.init();
  }

  init = () => {
    fetch(SERVER_URL, {
      method: 'GET'
    })
    .then(response => {
      if(!response.ok){
        console.error(response.statusText);
        return;
      }

      //Ok
      return response.json();
    }, error => {
      console.error(error);
    })
    .then(json=>{
      this.setState({
        tasks: json // reverse here if needed
      }); 
    })
  }

  //ADD TASK
  addTask = (title) => {
    const newTask = {
      title,//: title
      flagComplete: false
    }
    fetch(SERVER_URL,{
      method:"POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response=>{
      if(!response.ok){
        console.error(response.statusText)
        return;
      }
      return response.json();
    })
    .then(json=>{
      this.setState({
        tasks: [...this.state.tasks, json] // reverse here if needed
      });      
    })
  }


  // CHECK TASK
  checkTask = (completedTask) => {
    // console.log(completedTask.id);
    fetch(`${SERVER_URL}/${completedTask.id}`, {
      method: "PUT", // Acts as an update. Kind of.
      body: JSON.stringify({title: completedTask.title, flagComplete: !completedTask.flagComplete}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if(!response.ok){
        console.error(response.statusText)
        return;
      }

      this.setState({
        tasks: this.state.tasks.map(task=>{
          if(task === completedTask)
            task.flagComplete = !task.flagComplete;
          return task;
        })
      })

    })
  };

  // DELETE TASK
  deleteTask = (task) => {
    fetch(`${SERVER_URL}/${task.id}`,{
      method: 'DELETE'
    })
    .then(response=>{
      if(!response.ok){
        console.error(response.statusText);
        return;
      }
      this.setState({
        tasks: this.state.tasks.filter(t => t !== task)
      })      
    })


  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputField
          addTaskMethod={this.addTask}
        />
        <TaskList
          tasks={this.state.tasks}
          checkMethod={this.checkTask}
          deleteMethod={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
