import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TaskList.css'

import { Task } from '../Task'

class TaskList extends Component {
  static defaultProps = {
    filterTask: {},
  }

  static propTypes = {
    filterTask: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { filterTask, onLabel, onDelete, onEdit, onChangeEdit } = this.props
    const elements = [...filterTask].map((item) => {
      return (
        <Task
          key={item.id}
          {...item}
          onLabel={onLabel}
          onDelete={onDelete}
          onEdit={onEdit}
          onChangeEdit={onChangeEdit}
        />
      )
    })
    return <ul className="todo-list">{elements}</ul>
  }
}

export { TaskList }
