import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'

import TasksFilter from '../tasksFilter/TasksFilter'

function Footer({ todos, filterValue, clearCompletedTasks, changeFilter }) {
  const todoCount = todos.length - todos.filter((el) => el.checked).length
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter filterValue={filterValue} changeFilter={changeFilter} />
      <button type="button" className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  clearCompletedTasks: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default Footer
