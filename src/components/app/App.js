import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
// import TaskFilter from '../tasksFilter/TasksFilter';
import React, { Component } from 'react';

import './app.css'
import '../../index.css';

class App extends Component {
    state = {
        todos: [],

    };


    deletItem = (id) => {
        this.setState(({ todos }) => {
            const idx = todos.findIndex((el) => el.id === id);
            return { todos: [...todos.slice(0, idx), ...todos.slice(idx + 1)] }
        });
    };

    onToggleComleted = (id) => {
        this.setState(({ todos }) => {
            const idx = todos.findIndex((el) => el.id === id);
            const oldItem = todos[idx];
            const newItem = { ...oldItem, checked: !oldItem.checked };
            const newArray = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
            return { todos: newArray }

        })
    }


    addItem = (value) => {
        const newItem = {
            label: value,
            checked: false,
            id: this.state.todos.length + 1
        };
        this.setState(({ todos }) => {
            return { todos: [...todos, newItem] }
        });
    };



    render() {

        const completedCount = this.state.todos.filter((el) => el.checked).length;
        const todoCount = this.state.todos.length - completedCount;

        return (
            <div className="todoapp">
                <NewTaskForm
                    addItem={this.addItem} />
                <TaskList
                    todos={this.state.todos}
                    onDeleted={this.deletItem}
                    onToggleComleted={this.onToggleComleted} />
                <Footer
                    toDo={todoCount} />


            </div>
        );
    };
}

export default App