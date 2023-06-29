import './footer.css'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../tasksFilter/TasksFilter'

function Footer({ toDo, filter, changeFilter, clearCompletedTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
      <button type="button" className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  )
}


Footer.propTypes = {
  toDo: PropTypes.number,
  clearCompletedTasks: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
}

Footer.defaultProps = {
  toDo: 0,
  filter: 'All',
}

export default Footer
