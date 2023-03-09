import React from "react";
import {TaskFilter} from "../TaskFilter";
import PropTypes from 'prop-types'
import './Footer.css'
const Footer = (props) => {
    const {count, filterActive, filterAll, filterCompleted, onClearCompleted} = props
    return (

        <footer className='footer'>
            <span className='todo-count'>{count} items left</span>
            <TaskFilter filterActive = { filterActive}
                        filterAll = { filterAll}
                        filterCompleted = { filterCompleted}/>
            <button className='clear-completed' onClick={ onClearCompleted}>Clear completed</button>
        </footer>
    )

}

Footer.defaultProps = {
    count: 1,
    onClearCompleted: () => {}
}
Footer.propTypes = {
    count: PropTypes.number,
    onClearCompleted: PropTypes.func,
}
export {Footer};