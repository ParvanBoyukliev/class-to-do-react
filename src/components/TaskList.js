import React, { Component } from "react";
//import Task from './Task'

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="container">
                <h4>Task List</h4>
                <ol>
                    {this.props.tasks.map((task,id)=>(
                        <li key={id}>{task.title}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default TaskList;