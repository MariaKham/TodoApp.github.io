import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.label,
      pause: true,
      timer: this.props.timer,
      checked: false,
    }
  }

  componentDidMount() {
    this.timer()
  }

  componentWillUnmount() {
    const { id, changeTimerValue } = this.props
    const { timer } = this.state

    clearInterval(this.timerID)
    changeTimerValue(id, timer)
  }

  timer = () => {
    this.timerID = setInterval(() => {
      this.timerRun()
    }, 1000)
  }

  timerRun = () => {
    const { pause, timer, checked } = this.state

    if (this.props.timer === 0 && !pause && !checked) this.setState({ timer: timer + 1 })
    else if (this.props.timer !== 0 && !checked && !pause) this.setState({ timer: timer - 1 })
  }

  onToggleTimer = () => {
    const { checked } = this.state
    if (checked) return
    this.setState({ pause: true })
  }

  setTimer = () => {
    const { timer } = this.state

    if (timer < 0) return '00:00'
    return `${String(Math.floor(timer / 60)).padStart(2, '0')}:
      ${String(Math.floor(timer % 60)).padStart(2, '0')}`
  }

  handleStartTimer = () => {
    this.setState({ pause: false })
  }

  handlePauseTimer = () => {
    this.setState({ pause: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      editItem,
      todo: { id },
    } = this.props
    editItem(id, this.state.value.trim())
    this.setState({ value: '' })
    this.setState({ editing: false })
  }

  render() {
    const { onDeleted, onToggleComleted, todo } = this.props

    return (
      <li className={todo.checked ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onToggleComleted}
            id={todo.id}
            checked={todo.checked}
            onClick={() => this.onToggleTimer(todo.id)}
          />
          <label htmlFor={todo.id}>
            <span className="description">{todo.label}</span>
            <span className="description-info">
              <button
                type="button"
                className="icon icon-play"
                onClick={this.handleStartTimer}
                disabled={todo.checked}
              />
              <button type="button" className="icon icon-pause" onClick={this.handlePauseTimer} />
              <span className="created">
                <span className="timer">{this.setTimer()}</span>
              </span>
            </span>
            <span className="created">{`created ${formatDistanceToNow(todo.date, {
              includeSeconds: true,
              addSuffix: true,
            })}`}</span>
          </label>
          <button
            type="button"
            className="icon icon-edit"
            onClick={() =>
              this.setState(({ editing }) => ({
                editing: !editing,
                value: this.props.todo.label,
              }))
            }
          />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="edit"
              onChange={(e) => this.setState({ value: e.target.value })}
              value={this.state.value}
            />
          </form>
        )}
      </li>
    )
  }
}
Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    timer: PropTypes.number,
  }),
  onDeleted: PropTypes.func.isRequired,
  onToggleComleted: PropTypes.func.isRequired,
}

Task.defaultProps = {
  todo: {},
}

export default Task
