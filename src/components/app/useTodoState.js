import { useState, useRef } from 'react'

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue)
  const maxId = useRef(1)

  return {
    todos,
    addItem: (value, time) => {
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
    },
    deletItem: (idx) => {
      setTodos((data) => {
        return data.filter(({ id }) => id !== idx)
      })
    },
    onToggleCompleted: (idx) => {
      setTodos((data) => {
        return data.map((el) => {
          if (idx === el.id) el.checked = !el.checked // eslint-disable-line no-param-reassign
          return el
        })
      })
    },
    clearCompletedTasks: () => {
      setTodos((data) => {
        return data.filter((el) => !el.checked)
      })
    },
    editItem: (id) => {
      setTodos((data) => {
        return data.map((el) => {
          if (id === el.id) el.editing = !el.editing // eslint-disable-line no-param-reassign
          return el
        })
      })
    },
    onSubmitEdit: (event, id) => {
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
    },
    changeTimerValue: (id, value) => {
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
    },
  }
}
