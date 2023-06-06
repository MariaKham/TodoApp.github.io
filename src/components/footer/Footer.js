import './footer.css';
import React, { Component } from 'react';
import TasksFilter from '../tasksFilter/TasksFilter';

class Footer extends Component {
    render() {
        const { toDo } = this.props;

        // const completedCount = this.state.todos.filter((el) => el.checked).length;
        // const todoCount = this.state.todos.length - completedCount;

        return (
            <footer className="footer">
                <span className="todo-count">{toDo} items left</span>
                <TasksFilter
                />
                <button type="button" className="clear-completed">
                    Clear completed
                </button>
            </footer>
        );
    }
}


// const Footer = () => {
//     return (
//         <footer className="footer">
//             <span className="todo-count"> items left</span>
//             <button type="button" className="clear-completed">Clear completed</button>
//         </footer>
//     );
// };

export default Footer;