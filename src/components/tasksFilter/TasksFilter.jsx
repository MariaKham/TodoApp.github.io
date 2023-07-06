import React from 'react'

import './tasksFilter.css'

function TasksFilter({ filterValue, changeFilter }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'checked', label: 'Completed' },
  ]

  return (
    <ul className="filters">
      {buttons.map(({ name, label }) => {
        return (
          <li key={name}>
            <button type="button" className={filterValue === name ? 'selected' : ''} onClick={() => changeFilter(name)}>
              {label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TasksFilter
