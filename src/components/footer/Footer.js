import './footer.css';
import React, { Component } from 'react';
import TasksFilter from '../tasksFilter/TasksFilter';
import PropTypes from 'prop-types';

class Footer extends Component {

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

    static propTypes = {
        toDo: PropTypes.number,
        clearCompletedTasks: PropTypes.func.isRequired,
        changeFilter: PropTypes.func.isRequired,
        filter: PropTypes.string,
    };

    static defaultProps = {
        toDo: 0,
        filter: "All",
    }

}


export default Footer;