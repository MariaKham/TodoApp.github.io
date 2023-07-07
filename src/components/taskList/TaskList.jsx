import './taskList.css'
import PropTypes from 'prop-types'

import Task from '../task/Task'

function TaskList({ todos, onDeleted, onToggleCompleted, editItem, changeTimerValue, onSubmitEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const { id, date, timer } = todo
        return (
          <Task
            key={id}
            id={id}
            todo={todo}
            onDeleted={() => onDeleted(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
            editItem={() => editItem(id)}
            onSubmitEdit={(event) => onSubmitEdit(event, id)}
            timer={timer}
            date={date}
            changeTimerValue={(idx, val) => changeTimerValue(idx, val)}
            editing={todo.editing}
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Object),
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  changeTimerValue: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  todos: [],
}

export default TaskList
