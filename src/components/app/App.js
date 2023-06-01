import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import TaskFilter from '../tasksFilter/TasksFilter';
import React, { Component } from 'react';

import './app.css'
import '../../index.css';

class App extends Component {
    state = {
        todos: []
    };



    deletItem = (id) => {
        this.setState(({ todos }) => {
            const idx = todos.findIndex((el) => el.id === id);
            const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)]
            return { todos: newArray }
        });
    };

    // changeCheck = (id, newItem) => {
    //     this.setState(({ todos }) => ({
    //         todos: todos.map((el) => {
    //             if (id === el.id) { el.checked = newItem };
    //             return el;
    //         }),
    //     }));
    // }





    addItem = (text) => {
        const newItem = {
            label: text,
            // checked: false,
            id: this.state.todos.length + 1
        };
        this.setState(({ todos }) => {
            const newArray = [...todos, newItem]
            return { todos: newArray }
        });
    };











    render() {

        // const todos = [];

        return (
            <div className="todoapp">
                <NewTaskForm
                    addItem={this.addItem} />
                <TaskList
                    todos={this.state.todos}
                    onDeleted={this.deletItem}
                />
                <Footer />
                <TaskFilter />

            </div>
        );
    };
}

export default App