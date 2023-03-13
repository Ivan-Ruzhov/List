import React, { Component } from 'react'
import './Task.css'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

class Task extends Component {
  static defaultProps = {
    completed: false,
    editing: false,
    id: 1,
    text: 'Введите название задачи',
    onLabel: () => {},
    onDelete: () => {},
  }

  static propTypes = {
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    id: PropTypes.number,
    text: PropTypes.string,
    onLabel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }

  state = {
    text: this.props.text,
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onChangeEdit(this.props.id, this.state.text)
  }

  render() {
    console.log(new Date())
    const { completed, editing, id, text, onLabel, onDelete, onEdit } = this.props
    let className = ''
    if (completed) {
      className = 'completed'
    } else if (editing) {
      className = 'editing'
    } else {
      className = ''
    }
    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => {
              onLabel(id)
            }}
            checked={completed}
          />
          <label
            onClick={() => {
              onLabel(id)
            }}
          >
            <span className="description">{text}</span>
            <span className="created"> created {formatDistanceToNow(new Date(), { includeSeconds: true })}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => {
              onEdit(id)
            }}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => {
              onDelete(id)
            }}
          ></button>
        </div>
        {editing === true ? (
          <form onSubmit={this.onSubmit}>
            <input type="text" className="edit" value={this.state.text} onChange={this.onChange} />
          </form>
        ) : null}
      </li>
    )
  }
}

export { Task }
