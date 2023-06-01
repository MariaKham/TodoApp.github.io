import './tasksFilter.css';
import React, { Component } from 'react';


class TasksFilter extends Component {
    render() {
        // const {  } = this.props;
        return (
            <ul className="filters">
                <li>
                    <button type="button"
                        className="selected"
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                    >
                        Completed
                    </button>
                </li>
            </ul>
        );

    }
}



export default TasksFilter;