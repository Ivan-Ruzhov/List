import React, {Component} from "react";
import './TaskFilter.css'
import PropTypes from "prop-types";

class TaskFilter extends Component {
    static defaultProps = {
        filterAll: () => {},
        filterActive: () => {},
        filterCompleted: () => {}
    }

    static propTypes = {
        filterAll: PropTypes.func,
        filterActive: PropTypes.func,
        filterCompleted: PropTypes.func,
    }

    render() {
        const {filterAll, filterActive, filterCompleted, } = this.props

        return (
            <ul className='filters'>
                <li><button className='selected' onClick={ filterAll}>All</button></li>
                <li><button onClick={ filterActive}>Active</button></li>
                <li><button onClick={ filterCompleted}>Completed</button></li>
            </ul>
        );
    }
}

export {TaskFilter}