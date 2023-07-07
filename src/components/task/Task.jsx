import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

function Task(props) {
  const [value, setValue] = useState(props.label)
  const [pause, setPause] = useState(true)
  const [timer, setTimer] = useState(props.timer)

  const timerRun = () => {
    if (props.timer === 0 && !pause && !props.checked)
      setTimer((timerValue) => {
        return timerValue + 1
      })
    else if (timer !== 0 && !props.checked && !pause)
      setTimer((timerValue) => {
        return timerValue - 1
      })
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      timerRun()
    }, 1000)
    return () => {
      clearInterval(timerID)
      props.changeTimerValue(props.todo.id, timer)
    }
  }, [pause])

  const onToggleTimer = () => {
    if (props.checked) return
    setPause(true)
  }

  const timerSet = () => {
    if (timer < 0) return '00:00'
    return `${String(Math.floor(timer / 60)).padStart(2, '0')}:
      ${String(Math.floor(timer % 60)).padStart(2, '0')}`
  }

  const handleStartTimer = () => {
    setPause(false)
  }

  const handlePauseTimer = () => {
    setPause(true)
  }

  return props.editing ? (
    <li className="editing">
      <form onSubmit={props.onSubmitEdit}>
        <input
          id={props.id}
          key={props.id}
          className="edit"
          type="text"
          defaultValue={value}
          placeholder={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </li>
  ) : (
    <li className={props.todo.checked ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={props.onToggleCompleted}
          id={props.todo.id}
          checked={props.todo.checked}
          onClick={() => onToggleTimer(props.todo.id)}
        />
        <label htmlFor={props.id}>
          <span className="description">{props.todo.label}</span>
          <span className="description-info">
            <button type="button" className="icon icon-play" onClick={handleStartTimer} disabled={props.todo.checked} />
            <button type="button" className="icon icon-pause" onClick={handlePauseTimer} />
            <span className="created">
              <span className="timer">{timerSet()}</span>
            </span>
          </span>
          <span className="created">{`created ${formatDistanceToNow(props.date, {
            includeSeconds: true,
            addSuffix: true,
          })}`}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={props.editItem} />
        <button type="button" className="icon icon-destroy" onClick={props.onDeleted} />
      </div>
    </li>
  )
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
  onToggleCompleted: PropTypes.func.isRequired,
}

Task.defaultProps = {
  todo: {},
}

export default Task
