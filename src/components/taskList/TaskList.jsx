import './taskList.css'
import PropTypes from 'prop-types'

import Task from '../task/Task'

function TaskList({ todos, onDeleted, onToggleComleted, editItem, changeTimerValue }) {
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
            onToggleComleted={() => onToggleComleted(id)}
            editItem={editItem}
            timer={timer}
            date={date}
            changeTimerValue={(idx, val) => changeTimerValue(idx, val)}
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Object),
  onDeleted: PropTypes.func.isRequired,
  onToggleComleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  changeTimerValue: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  todos: [],
}

export default TaskList
