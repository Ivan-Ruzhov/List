import React, {Component} from "react";
import './TaskFilter.css'

class TaskFilter extends Component {
    render() {
        const {filterAll, filterActive, filterCompleted, } = this.props
        return (
            <ul className='filters'>
                <li><button className='selected' onClick={() => filterAll()}>All</button></li>
                <li><button onClick={() => filterActive()}>Active</button></li>
                <li><button onClick={() => filterCompleted()}>Completed</button></li>
            </ul>
        );
    }
}

export {TaskFilter}