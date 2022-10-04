import React, { Component } from "react";

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    addTask = ()=>{
        if(!this.state.value.trim().length)
            return;
        this.props.addTaskMethod(this.state.value.trim())
        this.setState({
            value: '',
        })
        document.getElementById('input-field').focus();        
    }

    render(){
        return(
            <fieldset className="input-area">
                <input
                    className="input-field"
                    type='text'
                    autoFocus
                    id="input-field"
                    placeholder="Add task here..."
                    value={this.state.value}
                    onKeyPress={
                        (event)=>{
                            if(event.code === 'Enter')
                                this.addTask()
                        }
                    }
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                        }
                    }
                />
                <button
                    className="add-button"
                    type="button"
                    onClick={this.addTask}
                >Add</button>
            </fieldset>
        )
    }

}

export default InputField