import React, { useState } from 'react'

function NewTaskForm({ addItem }) {
  const [value, setValue] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const timerSec = parseInt(min || 0, 10) * 60 + parseInt(sec || 0, 10)
    addItem(value, timerSec)
    setValue('')
    setMin('')
    setSec('')
  }

  const onValueChange = (e) => {
    setValue(e.target.value)
  }

  const onMinChange = (e) => {
    setMin(e.target.value)
  }

  const onSecChange = (e) => {
    setSec(e.target.value)
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          onChange={onValueChange}
          value={value}
          placeholder="What needs to be done?"
          required
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={onMinChange}
          value={min}
          type="number"
          step="1"
          min="0"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={onSecChange}
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

export default NewTaskForm
