import './tasksFilter.css'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'

function TasksFilter({ filter, changeFilter }) {
  return (
    <ul className="filters">
      /* не могу сообразить как применить здесь цикл, если бы нужно было только имя класса поменять в зависимости от знач. фильтра - понятно, 
но наличие ф-и со своим парам-м у каждой кнопки меня сбивает с толку.. перелопатила стать и видео, адекватная реализация только с useState, но это следующая тема..
остальное пофиксила согласно комментам */
      <li>
        <button type="button" onClick={() => changeFilter('All')} className={filter === 'All' ? 'selected' : null}>
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('Active')}
          className={filter === 'Active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => changeFilter('Completed')}
          className={filter === 'Completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
}

TasksFilter.defaultProps = {
  filter: 'All',
}

export default TasksFilter
