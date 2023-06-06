import './taskList.css';
import Task from '../task/Task';
import React, { Component } from 'react';

// const TaskList = ({ todos, onDeleted }) => {

//     const elements = todos.map((item) => {

//         const { id, ...itemProps } = item;

//         return (
//             <li key={id} className="completed">
//                 <Task {...itemProps} />
//             </li>
//         );
//     });

//     return (
//         <ul className="todo-list">
//             {elements}
//         </ul>
//     );
// };

class TaskList extends Component {

    render() {
        const { todos, onDeleted, onToggleComleted } = this.props;
        return (
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        todo={todo}
                        onDeleted={() => onDeleted(todo.id)}
                        onToggleComleted={() => onToggleComleted(todo.id)}

                    />
                ))}
            </ul>
        );
    }
}

export default TaskList;

// элементы массива это jsx элементы, к-е мы сосдали внутри мап. берется кажды элемент массива todos, а он определен в Апп и для
// каждого элемента массива создаем соответсвующий жсх (li), затем с помощью фигурных скобок поочередно добавляем наши элементы в список
// {elements}
// itemProps чтобы в свойства вошли те, что нужно, кроме id