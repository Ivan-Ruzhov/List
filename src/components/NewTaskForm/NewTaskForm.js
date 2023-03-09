import React, {Component} from "react";
import './NewTaskForm.css'
import PropTypes from 'prop-types'
class  NewTaskForm  extends Component  {

    static propTypes = {
        onAdd: PropTypes.func
    }
    static defaultProps = {
       onAdd: () => {}
    }
    state = {
        text : ''
    }
    onAdd = this.props.onAdd
    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.onAdd(this.state.text)
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