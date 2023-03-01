import React from "react";
import './TaskList.css';
import {Task} from "../Task";

const TaskList = ({details}) => {
    const elements = details.map((item) => {
        const {id, editing, completed, ...anyProps} = item
        let className = '';
        if(editing === true) {
            className = 'editing'
        } else if (completed === true) {
            className = 'completed'
        }
        return (
            <li key = {id} className={className} >
                <Task {...anyProps}/>
                {editing === true ? (<input type="text" className="edit" value="Editing task"/>) : null}
            </li>
        )
    })
        return(
            <ul className='todo-list'>
                {elements}
            </ul>
        );
}

export {TaskList}
