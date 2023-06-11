import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
  constructor() {
    super()
    this.state = {
      editing: false,
      value: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      editItem,
      todo: { id },
    } = this.props
    editItem(id, this.state.value.trim())
    this.setState({ value: '' })
    this.setState({ editing: false })
  }

  render() {
    const { onDeleted, onToggleComleted, todo, addItem, editItem } = this.props

    return (
      <li className={todo.checked ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleComleted} id={todo.id} checked={todo.checked} />
          <label htmlFor={todo.id}>
            <span className="description">{todo.label}</span>
            <span className="created">
              {`created ${formatDistanceToNow(todo.date, {
                includeSeconds: true,
                addSuffix: true,
              })}`}
            </span>
          </label>
          <button
            type="button"
            className="icon icon-edit"
            // onClick={() =>
            //     this.setState(({ editing }) => ({
            //         editing: !editing,
            //         value: this.props.todo.label,
            //     }))
            // }
            onClick={() =>
              this.setState({
                editing: !this.state.editing,
                value: this.props.todo.label,
              })
            }
          />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="edit"
              onChange={(e) => this.setState({ value: e.target.value })}
              value={this.state.value}
            />
          </form>
        )}
      </li>
    )
  }

  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      checked: PropTypes.bool,
      date: PropTypes.instanceOf(Date),
    }),
    onDeleted: PropTypes.func.isRequired,
    onToggleComleted: PropTypes.func.isRequired,
  }

  static defaultProps = {
    todo: {},
  }
}

export default Task;
