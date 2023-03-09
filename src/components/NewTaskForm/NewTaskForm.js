import React, {Component} from "react";
import './NewTaskForm.css'
class  NewTaskForm  extends Component  {
    state = {
        text : ''
    }
    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    render(){
        return (
            <form className='header' onSubmit={this.onSubmit}>
                <h1>todos</h1>
                <input className='new-todo' placeholder='What needs to be done?' autoFocus onChange={this.onChange} value={this.state.text}/>
            </form>
        )
    }

}

export {NewTaskForm}