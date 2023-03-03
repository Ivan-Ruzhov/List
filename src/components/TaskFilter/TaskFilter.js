import React, {Component} from "react";
import './TaskFilter.css'

class TaskFilter extends Component {
    render() {
        return (
            <ul className='filters'>
                <li><button className='selected'>All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>
        );
    }
}

export {TaskFilter}