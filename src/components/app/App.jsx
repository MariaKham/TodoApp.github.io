import React, { useState, useRef } from 'react'

import NewTaskForm from '../newTaskForm/NewTaskForm'
import TaskList from '../taskList/TaskList'
import Footer from '../footer/Footer'

import '../../index.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filterValue, setFilter] = useState('All')
  const maxId = useRef(1)

  const deletItem = (idx) => {
    setTodos((data) => {
      return data.filter(({ id }) => id !== idx)
    })
  }

  const addItem = (value, time) => {
    if (value) {
      const newItem = {
        label: value,
        timer: time,
        checked: false,
        editing: false,
        id: maxId.current++,
        date: new Date(),
      }
      setTodos((data) => {
        return [...data, newItem]
      })
    }
  }

  const onToggleComleted = (idx) => {
    setTodos((data) => {
      return data.map((el) => {
        if (idx === el.id) el.checked = !el.checked // eslint-disable-line no-param-reassign
        return el
      })
    })
  }

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

  const clearCompletedTasks = () => {
    setTodos((data) => {
      return data.filter((el) => !el.checked)
    })
  }

  const editItem = (id) => {
    setTodos((data) => {
      return data.map((el) => {
        if (id === el.id) el.editing = !el.editing // eslint-disable-line no-param-reassign
        return el
      })
    })
  }

  const onSubmitEdit = (event, id) => {
    event.preventDefault()
    setTodos((data) => {
      const idx = data.findIndex((el) => el.id === id)
      const oldItem = data[idx]

      const newItem = {
        ...oldItem,
        editing: !oldItem.editing,
        label: event.target[0].value,
      }

      const newArray = [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]

      return newArray
    })
  }

  const changeTimerValue = (id, value) => {
    setTodos((data) => {
      const index = data.findIndex((el) => {
        return el.id === id
      })

      const oldItem = data[index]
      if (typeof oldItem === 'undefined') return data
      const newItem = { ...oldItem, timer: value }
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return newArray
    })
  }

  return (
    <div className="todoapp">
      <NewTaskForm addItem={addItem} />
      <TaskList
        todos={filteredItems()}
        onDeleted={deletItem}
        onToggleComleted={onToggleComleted}
        editItem={editItem}
        changeTimerValue={changeTimerValue}
        onSubmitEdit={onSubmitEdit}
      />
      <Footer
        todos={todos}
        filterValue={filterValue}
        changeFilter={changeFilter}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  )
}

export default App
