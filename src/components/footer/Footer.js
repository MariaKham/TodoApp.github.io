import './footer.css'
import React, { Component } from 'react';
import TasksFilter from '../tasksFilter/TasksFilter';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"> items left</span>
                <TasksFilter />
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