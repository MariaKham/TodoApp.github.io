import React, { Component } from 'react'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', min: '', sec: '' }

    // this.onValueChange = this.onValueChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { value, min, sec } = this.state
    const timerSec = parseInt(min || 0, 10) * 60 + parseInt(sec || 0, 10)
    this.props.addItem(value, timerSec)
    this.setState({
      value: '',
      min: '',
      sec: '',
    })
  }

  onValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    })
  }

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }

  render() {
    const { value, min, sec } = this.state
    return (
      <header className="header">
        <h1>Todos</h1>
        <form className="new-todo-form" onSubmit={this.handleSubmit}>
          <input
            className="new-todo"
            onChange={this.onValueChange}
            value={value}
            placeholder="What needs to be done?"
            required
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            onChange={this.onMinChange}
            value={min}
            type="number"
            step="1"
            min="0"
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            onChange={this.onSecChange}
            value={sec}
            type="number"
            step="1"
            min="0"
            max="59"
          />
          <button type="submit" />
        </form>
      </header>
    )
  }
}

export default NewTaskForm
