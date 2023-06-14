import './taskList.css'
import PropTypes from 'prop-types'

import Task from '../task/Task'

function TaskList({ todos, onDeleted, onToggleComleted, editItem }) {
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
  )
}

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Object),
  onDeleted: PropTypes.func.isRequired,
  onToggleComleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  todos: [],
}

export default TaskList
