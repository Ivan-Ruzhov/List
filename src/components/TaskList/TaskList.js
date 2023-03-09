import React, {Component} from "react";
import './TaskList.css';
import {Task} from "../Task";



class TaskList extends Component {
    static defaultProps = {
        filterTask: {

        },

    }
    render() {
        const {filterTask, onLabel, onDelete} = this.props
        const elements = [...filterTask].map((item) => {
            return (
                <Task key = {item.id} {...item} onLabel = {onLabel} onDelete = {onDelete} />
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
