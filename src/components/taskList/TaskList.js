import './taskList.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task/Task';

class TaskList extends Component {
  render() {
    const { todos, onDeleted, onToggleComleted, editItem } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            onDeleted={() => onDeleted(todo.id)}
            onToggleComleted={() => onToggleComleted(todo.id)}
            editItem={editItem}
          />
        ))}
      </ul>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func.isRequired,
  onToggleComleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  todos: [],
};

export default TaskList;


