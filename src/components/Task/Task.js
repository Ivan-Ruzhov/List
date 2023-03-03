import React, {Component} from "react";
import './Task.css';


class Task extends Component {

    render() {
        const  {completed, checked, editing, id, text, onLabel, onDelete} = this.props
        let className = '';
        if(completed) {
            className = 'completed'
        } else {
            className = ''
        }
        return(

            <li key = {id} className={className} >
            <div className='view'>
                <input  className='toggle' type="checkbox" onClick={() => {onLabel(id)}} checked={checked}/>
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