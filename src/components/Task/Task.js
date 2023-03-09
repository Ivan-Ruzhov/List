import React, {Component} from "react";
import './Task.css';

class Task extends Component {
    static defaultProps = {
        completed: false,
        editing: false,
        id: 1,
        text: 'Введите название задачи',
        onLabel: () => {},
        onDelete: () => {}
    }
    render() {
        const  {completed, editing, id, text, onLabel, onDelete} = this.props
        let className = '';
        if(completed) {
            className = 'completed'
        } else {
            className = ''
        }
        return(
            <li className={className} >
            <div className='view'>
                <input  className='toggle' type="checkbox" onChange={() => {onLabel(id)}} checked={completed}/>
                <label onClick={() => {onLabel(id)}}>
                    <span className='description'>
                        {text}
                    </span>
                    <span className='created'>
                        created 17 seconds ago
                    </span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'
                onClick={() => {
                    onDelete(id)
                }}></button>
            </div>
                {editing === true ? (<input type="text" className="edit" value="Editing task"/>) : null}
            </li>
            );
    }
}

export {Task};