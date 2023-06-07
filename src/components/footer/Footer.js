import './footer.css';
import React, { Component } from 'react';
import TasksFilter from '../tasksFilter/TasksFilter';

class Footer extends Component {

    state = {
        toDo: 0,
        filter: "All",
    }
    render() {
        const { toDo, filter, changeFilter, clearCompletedTasks } = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">{toDo} items left</span>
                <TasksFilter
                    filter={filter}
                    changeFilter={changeFilter}
                />
                <button
                    type="button"
                    className="clear-completed"
                    onClick={clearCompletedTasks}
                >
                    Clear completed
                </button>
            </footer>
        );
    }
}


export default Footer;