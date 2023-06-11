import React, { Component } from 'react';

import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';

import '../../index.css';

class App extends Component {
  maxId = 100;

  constructor() {
    super();
    this.state = {
      todos: [],
      filter: 'All',
    };
  }

  deletItem = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id)
      return { todos: [...todos.slice(0, idx), ...todos.slice(idx + 1)] }
    })
  }

  onToggleComleted = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id)
      const oldItem = todos[idx]
      const newItem = { ...oldItem, checked: !oldItem.checked }
      const newArray = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
      return { todos: newArray }
    })
  }

  addItem = (value) => {
    const newItem = {
      label: value,
      checked: false,
      // id: this.state.todos.length + 1,
      id: this.maxId++,
      date: new Date(),
    }
    this.setState(({ todos }) => {
      return { todos: [...todos, newItem] }
    })
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
        if (el.id === id) el.label = text
        return el
      }),
    }))
  }

  render() {
    const completedCount = this.state.todos.filter((el) => el.checked).length;
    const todoCount = this.state.todos.length - completedCount

    return (
      <div className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <TaskList
          // todos={this.state.todos}
          onDeleted={this.deletItem}
          onToggleComleted={this.onToggleComleted}
          todos={this.filteredItems()}
          editItem={this.editItem}
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

export default App;
