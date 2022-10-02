import React, { Component } from "react";

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    render(){
        return(
            <fieldset>
                <input
                    className="input-field"
                    type='text'
                    autoFocus
                    placeholder="Add task here..."
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                    }}
                />
                <button
                    className="add-button"
                    type="button"
                    onClick={() => {
                        if(!this.state.value.trim().length)
                            return;
                        this.props.addTodoMethod(this.state.value.trim())
                        this.setState({
                            value: '',
                        })
                    }}
                >Add</button>
            </fieldset>
        )
    }

}

export default InputField