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
                    {this.props.tasks.map(task=>(
                        <li
                            className={task.flagComplete ? 'complete' : 'current'}
                            key={task.id}
                        >{task.title}&nbsp;
                            <button className="check-btn" onClick={() => this.props.checkMethod(task)}>V</button>
                            <button className="close-btn" onClick={() => this.props.deleteMethod(task)}>X</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default TaskList;