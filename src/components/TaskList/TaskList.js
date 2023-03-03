import React, {Component} from "react";
import './TaskList.css';
import {Task} from "../Task";



class TaskList extends Component {

    render() {
        const {arrTask, onLabel, onDelete} = this.props
        const elements = arrTask.map((item) => {
            return (
                <Task  {...item} onLabel = {onLabel} onDelete = {onDelete}/>
            )
        })
        return(
            <ul className='todo-list'>
                {elements}
            </ul>
        );
    }
}


export {TaskList}
