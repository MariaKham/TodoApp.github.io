import React, { useState } from 'react'

import NewTaskForm from '../newTaskForm/NewTaskForm'
import TaskList from '../taskList/TaskList'
import Footer from '../footer/Footer'

import useTodoState from './useTodoState'

import '../../index.css'

function App() {
  const {
    todos,
    addItem,
    deletItem,
    onToggleCompleted,
    editItem,
    onSubmitEdit,
    changeTimerValue,
    clearCompletedTasks,
  } = useTodoState([])

  const [filterValue, setFilter] = useState('All')

  const filteredItems = () => {
    switch (filterValue) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((el) => !el.checked)
      case 'checked':
        return todos.filter((el) => el.checked)
      default:
        return todos
    }
  }

  const changeFilter = (filterName) => {
    setFilter(filterName)
  }

  const todoCount = todos.length - todos.filter((el) => el.checked).length

  return (
    <div className="todoapp">
      <NewTaskForm addItem={addItem} />
      <TaskList
        todos={filteredItems()}
        onDeleted={deletItem}
        onToggleCompleted={onToggleCompleted}
        editItem={editItem}
        changeTimerValue={changeTimerValue}
        onSubmitEdit={onSubmitEdit}
      />
      <Footer
        todoCount={todoCount}
        todos={todos}
        filterValue={filterValue}
        changeFilter={changeFilter}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  )
}

export default App
