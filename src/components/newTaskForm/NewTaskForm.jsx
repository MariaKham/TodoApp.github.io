import React, { Component } from 'react'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    // this.onValueChange = this.onValueChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.value.trim()) this.props.addItem(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <form className="header" onSubmit={this.handleSubmit}>
        <h1>Todos</h1>
        <label>
          <input
            className="new-todo"
            onChange={this.onValueChange}
            value={this.state.value}
            placeholder="What needs to be done?"
          />
        </label>
      </form>
    )
  }
}

export default NewTaskForm
