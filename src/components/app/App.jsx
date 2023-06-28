import React, { Component } from 'react'

import NewTaskForm from '../newTaskForm/NewTaskForm'
import TaskList from '../taskList/TaskList'
import Footer from '../footer/Footer'

import '../../index.css'

class App extends Component {
  maxId = 100

  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'All',
    }
  }

  deletItem = (idx) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== idx),
    }))
  }

  addItem = (value, time) => {
    if (value) {
      const newItem = {
        label: value,
        timer: time,
        checked: false,
        editing: false,
        id: this.maxId++,
        date: new Date(),
      }
      this.setState(({ todos }) => {
        return { todos: [...todos, newItem] }
      })
    }
  }

  onToggleComleted = (idx) => {
    this.setState(({ todos }) => ({
      todos: todos.map((el) => {
        if (idx === el.id) el.checked = !el.checked // eslint-disable-line no-param-reassign
        return el
      }),
    }))
  }

  filteredItems = () => {
    const { todos, filter } = this.state
    return todos.filter(({ checked }) => {
      const all = filter === 'All'
      const completed = filter === 'Completed'
      return all ? true : completed ? checked === true : checked === false
    })
  }

  changeFilter = (newItem) => {
    this.setState({ filter: newItem })
  }

  clearCompletedTasks = () => {
    this.setState(({ todos }) => {
      const newArray = todos.filter((el) => !el.checked)
      return { todos: newArray }
    })
  }

  editItem = (id, text) => {
    this.setState(({ todos }) => ({
      todos: todos.map((el) => {
        if (el.id === id) el.label = text // eslint-disable-line no-param-reassign
        return el
      }),
    }))
  }

  changeTimerValue = (id, value) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex((el) => {
        return el.id === id
      })

      const oldItem = todos[index]
      if (typeof oldItem === 'undefined') return
      const newItem = { ...oldItem, timer: value }
      const newArray = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)]

      return {
        todos: newArray,
      }
    })
  }

  render() {
    const completedCount = this.state.todos.filter((el) => el.checked).length
    const todoCount = this.state.todos.length - completedCount

    return (
      <div className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <TaskList
          onDeleted={this.deletItem}
          onToggleComleted={this.onToggleComleted}
          todos={this.filteredItems()}
          editItem={this.editItem}
          changeTimerValue={this.changeTimerValue}
        />
        <Footer
          toDo={todoCount}
          filter={this.state.filter}
          changeFilter={this.changeFilter}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </div>
    )
  }
}

export default App
