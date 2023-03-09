import React from "react";
import {TaskFilter} from "../TaskFilter";
import './Footer.css'
const Footer = (props) => {

    return (

        <footer className='footer'>
            <span className='todo-count'>{props.count} items left</span>
            <TaskFilter filterActive = {props.filterActive}
                        filterAll = {props.filterAll}
                        filterCompleted = {props.filterCompleted}/>
            <button className='clear-completed' onClick={props.onClearCompleted}>Clear completed</button>
        </footer>
    )

}
export {Footer};